import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController, AccountController } from './controller/cats/cats.controller';
import { CatsService } from './service/cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AccountController],
  providers: [AppService, CatsService],
})
export class AppModule {}
