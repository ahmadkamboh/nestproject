import { Controller, Get , Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/get')
  getHell(): string {
    return this.appService.getHello();
  }
  @Get('/get')
  getHe(): string {
    return this.appService.getHello();
  }
  @Post('/post')
  postHello(): string {
    return this.appService.getHello();
  }
  @Post('/post')
  potHello(): string {
    return this.appService.getHello();
  }
}
