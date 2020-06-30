import { Controller, Get, Post,  Req, HttpCode} from '@nestjs/common';
import { Request, request } from 'express';

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

	@Post('add')
	// 新增
	create(): string {
		return 'Add info success!';
	}

	@Get('abc*def')
	tp(): string{
		return '通配符';
	}

	@Post('ztm')
	@HttpCode(201)
	ztm(@Req() request: Request): string{
		console.log(request);
		return '状态码';
	}
}
