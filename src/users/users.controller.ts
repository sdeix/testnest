import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';


@ApiTags("Пользователи")
@Controller('users')
export class UsersController {

    constructor(private UsersService:UsersService){    }

    @ApiOperation({summary:'Создание пользователя'})
    @ApiResponse({status:200,type:User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.UsersService.createUser(userDto);
    }

    @ApiOperation({summary:'Получение списка пользователей'})
    @ApiResponse({status:200,type:[User]})
    @Get()
    getAll(){
        return this.UsersService.getAllUsers();
    }
}
