import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString, Matches } from 'class-validator';

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
    example: '11 9999-2222',
  })
  @IsString()
  // @IsPhoneNumber()
  @IsNotEmpty()
  // @Matches(/^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$/, {
  //   message: 'the CPF document must contains this mask 123.123.123-12',
  // })
  phoneNumber: string;

  // @ApiProperty({
  //   description: 'Institute`s phoneNumber',
  //   example: '11 9999-2222',
  // })
  // @IsString()
  // @IsPhoneNumber()
  // @IsNotEmpty()
  // users?: string[];
}
