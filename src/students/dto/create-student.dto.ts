import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';

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
    example: 'bf026c0d-874b-413e-af94-7c6769cfe248',
  })
  @IsNotEmpty()
  @IsUUID()
  user: string;

  @ApiProperty({
    description: 'Institute`s student',
    example: '64baeaa6-abfb-47a9-997e-607cbf60267f',
  })
  @IsNotEmpty()
  @IsUUID()
  institute: string;
}
