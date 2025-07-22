import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
            verify: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              const config = {
                'FIREBASE_PROJECT_ID': 'test-project',
                'FIREBASE_CLIENT_EMAIL': 'test@test.com',
                'FIREBASE_PRIVATE_KEY': 'test-key',
                'JWT_SECRET': 'test-secret',
              };
              return config[key];
            }),
          },
        },
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockRepository,
        }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
