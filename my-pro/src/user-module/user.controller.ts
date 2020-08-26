import { Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe, Req, Res, HttpStatus } from '@nestjs/common';
import { User } from './interface/user';
import { UserService } from './user.service';
import { UserDto, UserParamsDto } from './dto/user.dto';
import { Request ,Response } from 'express';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }



    @Get('/get')
    getUsers(): User[] {
        return this.userService.getUsers();
    }

    @Get('/:email')
    async getUser(@Param() param: UserParamsDto , @Req() req : Request, @Res( ) res: Response ){
try {
    
    console.log('asdfghj',param.email)
    const data = await  this.userService.getUser(param.email);
    console.log('dataaaaaaa', data)
    
    res.status(HttpStatus.CREATED).send(data);
} catch (error) {
    console.log('error', error)
}

    }

    @Post()
    @UsePipes( new ValidationPipe())

    async postUser(@Body()user: UserDto): Promise <User> {  
        return this.userService.addUser(user);
  }


    @Delete('/:email')
    deleteUser(@Param() params: UserParamsDto): User[] {
        return this.userService.deleteUser(params.email);
  }
}
