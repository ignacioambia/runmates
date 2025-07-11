import { Injectable, Inject, forwardRef } from '@nestjs/common';
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
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async registerUser(createUserDto: CreateUserDto): Promise<RegisterUserResponse> {
    // const usersExists = await this.userRepository.findOneBy({ email: createUserDto.email });

    // if (createUserDto.email && usersExists) {
    //   throw new BadRequestException('User already exists');
    // }
    const user = this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(user);

    const token = this.authService.generateToken({ id: savedUser.id });
    return { userId: savedUser.id, token};
  }

  async loginFirebaseUser(userInfo: any): Promise<any> {
    let user: User;
    let savedUser: UserEntity;
    user = await this.userRepository.findOneBy({ firebaseUid: userInfo.firebaseUid });
    if (!user) {
      user = this.userRepository.create({ 
        firebaseUid: userInfo.firebaseUid,
        email: userInfo.email,
        photoURL: userInfo.photoURL,
        name: userInfo.displayName,
        averagePace: null, // Set default values if needed
        motivation: null,
        frequency: null,
        goal: null
       });
      savedUser = await this.userRepository.save(user);
    }
    const token = this.authService.generateToken({ id: user['id'] || savedUser.id });
    return { user, token };

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
