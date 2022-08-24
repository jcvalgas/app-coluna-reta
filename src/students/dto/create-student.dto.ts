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
    example: '11 2222-2222',
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
    example: 'c07437d1-f340-4050-a4d5-adf379830000',
  })
  @IsNotEmpty()
  @IsUUID()
  user: string;

  @ApiProperty({
    description: 'Institute`s student',
    example: '8a4fd390-832d-4f4d-bb21-6face2cec010',
  })
  @IsNotEmpty()
  @IsUUID()
  institute: string;
}
