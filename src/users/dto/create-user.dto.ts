import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

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
  @IsBoolean()
  @IsOptional()
  role?: boolean;

  @ApiProperty({
    description: 'User-related institutes ID',
    example: ['64baeaa6-abfb-47a9-997e-607cbf60267f'],
  })
  @IsOptional()
  @IsUUID('all', { each: true })
  institutes?: string[];
}
