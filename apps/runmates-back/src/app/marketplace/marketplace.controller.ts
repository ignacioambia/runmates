import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { PostTicketDto } from './dto/post-ticket.dto';
import { TokenPayload } from '../common/decorators/token-payload.decorator';
import { Public } from '../common/decorators/public.decorator';

@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Post('tickets')
  create(@Body() postTicketDto: PostTicketDto, @TokenPayload('id') userId: number) {
    return this.marketplaceService.postTicket(postTicketDto, userId);
  }

  @Public()
  @Get('tickets')
  findAll() {
    return this.marketplaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketplaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarketplaceDto: UpdateMarketplaceDto) {
    return this.marketplaceService.update(+id, updateMarketplaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketplaceService.remove(+id);
  }
}
