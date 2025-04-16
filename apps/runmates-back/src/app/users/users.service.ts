import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { RegisterUserResponse, User } from '@runmates/types/users';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    private readonly authService: AuthService,
  ) {}

  async registerUser(createUserDto: CreateUserDto): Promise<RegisterUserResponse> {
    const user = this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(user);

    const token = this.authService.generateToken({ id: savedUser.id, email: savedUser.email });
    return { user: savedUser, token};
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    const updatedUser = await this.userRepository.findOneBy({ id });
    if (!updatedUser) {
      throw new Error('User not found'); // Handle the case where the user no longer exists
    }
    const { id: userId, ...user} = updatedUser;
    return user;
  }
}
