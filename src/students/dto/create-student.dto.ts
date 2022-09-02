import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    description: 'Student`s name',
    example: 'Tony',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Student`s birth date',
    example: '22/12/2022',
  })
  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @ApiProperty({
    description: 'Student`s phoneNumber',
    example: '+55 9895652642',
  })
  @IsString()
  @IsPhoneNumber()
  @IsNotEmpty()
  phoneStudent: string;

  @ApiProperty({
    description: 'Student`s photo',
    example: 'https://sm.ign.com/ign_br/screenshot/default/tony_c455.jpg',
  })
  @IsString()
  @IsNotEmpty()
  photo: string;

  @ApiProperty({
    description: 'Student`s description',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula iaculis augue, ut vestibulum nisi aliquet sed. Quisque sed pulvinar libero.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'ID of user responsible for the registration',
    example: 'fbdaa2bc-9272-4110-927f-a4d0ec01dd58',
  })
  @IsNotEmpty()
  @IsUUID()
  user: string;

  @ApiProperty({
    description: 'Institute`s student',
    example: 'e816d18c-4ea8-4a62-8d82-65257bde506d',
  })
  @IsNotEmpty()
  @IsUUID()
  institute: string;
}
