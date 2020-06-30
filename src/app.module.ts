import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController, AccountController } from './controller/cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AccountController],
  providers: [AppService],
})
export class AppModule {}
