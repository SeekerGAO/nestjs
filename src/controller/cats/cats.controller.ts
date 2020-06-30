import {
	Controller,
	Get, Post,
	Req, HttpCode,
	Header, Redirect,
	Query, Param,
	HostParam, Body, Res, HttpStatus
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from '../../dto/create-cat.dto';
import { CatsService } from 'src/service/cats/cats.service';

@Controller('cats')
export class CatsController {
	// 单例
	constructor(private readonly catsService: CatsService) {}

	@Post('create-cat')
	async createCat(@Body() createCatDto: CreateCatDto): Promise<any> {
		this.catsService.create(createCatDto);
	}

	@Post('create-cat-with-res')
	createCatWithRes(@Res() res: Response): void {
		res.status(HttpStatus.CREATED).send('create cat with res');
	}

	@Get()
	findAll(@Req() request: Request): void {
		this.catsService.findAll();
	}

	@Get('find-all-with-res')
	findAllWithRes(@Res() res: Response): void {
		res.status(HttpStatus.OK).json([]);
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
