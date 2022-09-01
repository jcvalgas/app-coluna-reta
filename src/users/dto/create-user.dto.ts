import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User`s name',
    example: 'Valgas',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User`s email',
    example: 'valgas@email.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User`s password',
    example: 'valgas375466',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'If user is admin or server',
    example: false,
  })
  @IsString()
  role: boolean;

  @ApiProperty({
    description: 'User-related institutes ID',
    example: ['8a4fd390-832d-4f4d-bb21-6face2cec010'],
  })
  @IsUUID('all', { each: true })
  institutes?: string[];
}
