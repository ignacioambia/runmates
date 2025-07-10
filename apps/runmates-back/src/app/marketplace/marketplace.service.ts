import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { PostTicketDto } from './dto/post-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketEntity } from './entities/tickets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarketplaceService {

  constructor(@InjectRepository(TicketEntity)
  private readonly ticketRepository: Repository<TicketEntity>) {

  }
  
  async postTicket(postTicketDto: PostTicketDto, userId: number) {
    // Check if the user already has a ticket
    const existingTicket = await this.ticketRepository.findOne({
      where: {
        user: { id: userId }
      }
    });
    
    // If a ticket already exists for this user, throw an error
    if (existingTicket) {
      throw new BadRequestException('Sólo se permite un ticket por usuario y ya tienes uno registrado');
    }
    
    // Create a ticket with all the properties from the DTO
    const ticket = this.ticketRepository.create({...postTicketDto, user: { id: userId }});
    
    const savedTicket = await this.ticketRepository.save(ticket);
    return savedTicket;
  }

  async findAll() {
    // Get all tickets and include user information
    const tickets = await this.ticketRepository.find({
      relations: ['user'],
      order: {
        created_at: 'DESC' // Most recent tickets first
      }
    });
    
    return tickets;
  }

  findOne(id: number) {
    return `This action returns a #${id} marketplace`;
  }

  update(id: number, updateMarketplaceDto: UpdateMarketplaceDto) {
    return `This action updates a #${id} marketplace`;
  }

  remove(id: number) {
    return `This action removes a #${id} marketplace`;
  }
}
