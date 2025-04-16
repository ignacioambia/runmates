import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from '../common/decorators/public.decorator';
import { TokenPayload } from '../common/decorators/token-payload.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }

  @Patch('me')
  updateUser(@Body() updateUserDto: UpdateUserDto, @TokenPayload('id') userId: number) {
    // console.log('updateUser', updateUserDto, id);
    return {updateUserDto, userId};
    // return this.usersService.updateUser(id, updateUserDto);
  }
}
