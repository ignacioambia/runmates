import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { AuthService } from '../auth/auth.service';
import { JwtSecretRequestType, JwtService } from '@nestjs/jwt';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController, ],
      providers: [UsersService, AuthService, JwtService,{
        provide: getRepositoryToken(UserEntity),
        useValue: mockRepository,
      }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
