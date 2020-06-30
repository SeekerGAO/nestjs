import {
	Controller,
	Get, Post,
	Req, HttpCode,
	Header, Redirect,
	Query, Param,
	HostParam
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

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

	@Post('mod-header')
	@Header('Cache-Control', 'none')
	modHeader(): string{
		return 'Modify Header!';
	}

	@Get('docs')
  @Redirect('https://docs.nestjs.com', 301)
	getDocs(@Query('version') version: string): Record<string, string> {
		console.log(version)
		if (version && version === '5') {
			return { url: 'https://docs.nestjs.com/v5/', statuCode: '302' };
		}
	}

	@Get(':id')
	findId(@Param('id') id: string): string{
		return `Find id is ${id}`;
	}
}

@Controller({ path: 'account', host: ':localhost' })
export class AccountController {
	@Get()
	getInfo(@HostParam('localhost') account: string): string {
		return account;
	}

	@Get('async')
	async findAll(): Promise<any[]>{
		return [];
	}

	@Get('observable')
	find(): Observable<any[]>{
		return of([]);
	}
}
