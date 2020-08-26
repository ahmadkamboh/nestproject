import { IsString, IsEmail, IsDefined } from "class-validator";

export class UserDto {

    @IsString()
    @IsEmail()
    @IsDefined()
    email: string;


    @IsString()
    @IsDefined()
    username: string;

    Profile: string;
}

export class UserParamsDto {

    @IsString()
    @IsEmail()
    @IsDefined()
    email: string;

}