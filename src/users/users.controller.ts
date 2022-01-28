/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, InternalServerErrorException, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';


@ApiTags('users')
@Controller('users')
export class UsersController {
    
    constructor(private usersService: UsersService){}

//     @Get()
//     getUsers(): any {
//     return [{ id: 0 }];
//   }

//   @Get(':id')
//   getUserById(@Param('id') id:string):any{
//     return{
//         id:Number(id)
//     }
//   }

  @ApiOkResponse({type:User, isArray:true})  
  @Get()
  getUsers(): User[] {
  return this.usersService.findAll()
}

@ApiQuery({name:'name', required:false})
@ApiOkResponse({type:User, isArray:true})  
@Get('query')
getUserByQuery(@Query('name') name:string): User[] {
return this.usersService.findQuery(name)
}

@ApiOkResponse({type:User, description:'The user by id'})
@ApiBadRequestResponse()   //it will show documented error in swagger
@ApiNotFoundResponse()
@Get(':id')
getUserById(@Param('id', ParseIntPipe) id :number):User{
    //const user = this.usersService.findById(Number(id));
    const user = this.usersService.findById(id);
    console.log(typeof id)
    if(!user){
        //throw new NotFoundException();
        //throw new BadRequestException();
        //throw new InternalServerErrorException()
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'sucker'
        }, HttpStatus.FORBIDDEN)
    }
    return user
}

@ApiCreatedResponse({type:User})
@Post()
createUser(@Body() body : CreateUserDto) : User[]{
    return this.usersService.createUser(body)
}

}
