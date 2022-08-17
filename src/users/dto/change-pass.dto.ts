import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class changePassDto {

	@ApiProperty({
		description: 'Old user password',
		example: '123456',
	})
	@IsString()
	@IsNotEmpty()
	oldPassword: string;

	@ApiProperty({
			description: 'New user password',
			example: '654321',
		})
  @IsString()
  @IsNotEmpty()
  password: string;

	@ApiProperty({
		description: 'Confirming the new user password',
		example: '654321',
	})
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}