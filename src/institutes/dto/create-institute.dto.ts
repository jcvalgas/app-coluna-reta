import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateInstituteDto {
  @ApiProperty({
    description: 'Institute`s name',
    example: 'Escola da Bruna',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Institute`s address',
    example: 'Rua da escola, 22',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Institute`s phoneNumber',
    example: '+55 1199992222',
  })
  @IsString()
  @IsPhoneNumber()
  @IsNotEmpty()
  phoneNumber: string;

}
