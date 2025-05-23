/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
  const port = process.env.PORT || 3000;
  app.enableCors({
    origin: '*', // Or specify your frontend URL e.g., 'https://yourfrontend.com'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}}`
  );
}

bootstrap();
