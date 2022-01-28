/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users:User[] = [
        {id:0, name:'nabeel'}, 
        {id:1, name:'johnson'},
        {id:2, name:'kausar'}, 
        {id:3, name:'adeel'}
    ]


    findAll():User[]{
        return this.users;
    }

    findQuery(name?:string):User[]{
        if(name){
            return this.users.filter(user => user.name === name);     
        }
        return this.users;
    }

    findById(userId:number):User{
        return this.users.find(user => user.id == userId);
    }

    createUser(createUserDto:CreateUserDto):User[]{
        const newUser = {id:Date.now(), ...createUserDto}
        this.users.push(newUser)
        return this.users;
    }
}
