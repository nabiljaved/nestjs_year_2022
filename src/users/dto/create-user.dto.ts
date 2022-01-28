/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateUserDto{
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    name: string;

    @ApiProperty({required:false})
    age?: number;
}