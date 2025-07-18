import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LeadModule } from './lead/lead.module';
import { TrainingPlanModule } from './training-plan/training-plan.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingPlanTemplatesModule } from './training-plan-templates/training-plan-templates.module';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { TypeOrmNamingStrategy } from './type-orm-naming-strategy';
import { MarketplaceModule } from './marketplace/marketplace.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        autoLoadEntities: true,
        namingStrategy: new TypeOrmNamingStrategy(),
        synchronize: true, // Set to false in production
      }),
      inject: [ConfigService],
    }),
    LeadModule,
    TrainingPlanModule,
    TrainingPlanTemplatesModule,
    ChatsModule,
    UsersModule,
    AuthModule,
    MarketplaceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
