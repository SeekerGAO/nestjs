import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
	@Get()
	findAll(): string {
		return 'find all cats';
	}

	@Get('test')
	getCatInfo(): { name: string } {
		return {
			name: 'Tom',
		}
	}
}
