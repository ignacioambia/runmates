import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}
  registerUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    console.log('Everythin ok until', user)
    return this.userRepository.save(user);
  }
}
