import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), forwardRef(() => AuthModule)], // Add your entities here
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService so it can be used in other modules
})
export class UsersModule {}
