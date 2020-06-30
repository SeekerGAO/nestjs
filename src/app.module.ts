import { Module } from '@nestjs/common';
import { CatsController, AccountController } from './cats/controller/cats.controller';
import { CatsService } from './cats/service/cats.service';

@Module({
  imports: [],
  controllers: [CatsController, AccountController],
  providers: [CatsService],
})
export class AppModule {}
