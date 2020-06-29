import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
	@Get()
	findAll(@Req() request: Request): string {
		console.log(request);
		return 'find all cats';
	}

	@Get('test')
	getCatInfo(): { name: string } {
		return {
			name: 'Tom',
		}
	}
}
