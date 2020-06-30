import { Injectable, Optional, Inject } from '@nestjs/common';
import { Cat } from 'src/interface/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): void {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

@Injectable()
export class HttpService<T> {
  constructor(
    @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient: T
  ) {}
}