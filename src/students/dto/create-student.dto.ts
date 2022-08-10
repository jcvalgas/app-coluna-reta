import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {
  @ApiProperty({
    description: 'Student`s name',
    example: 'Tony',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Student`s photo',
    example: 'https://sm.ign.com/ign_br/screenshot/default/tony_c455.jpg',
  })
  @IsString()
  @IsNotEmpty()
  photo: string;

  @ApiProperty({
    description: 'Student`s description',
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula iaculis augue, ut vestibulum nisi aliquet sed. Quisque sed pulvinar libero.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
