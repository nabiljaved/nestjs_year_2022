/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

/* eslint-disable prettier/prettier */
export class User{
    @ApiProperty()
    id:number;

    @ApiProperty()
    name:string;
} 