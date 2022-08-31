import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateHistoricDto {
  @ApiProperty({
    description: 'Historical date',
    example: '20/01/2022',
  })
  @IsString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({
    description: 'photo of student`s illness',
    example: ['https://www.itcvertebral.com.br/wp-content/uploads/2020/04/escoliose1.jpg'],
  })
  @IsUrl()
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(3)
  @IsString()
  @IsNotEmpty()
  photo: string[];

  @ApiProperty({
    description: 'Patient referral',
    example: 'Rx, fisioterapia...',
  })    
  @IsString()
  @IsNotEmpty()
  forwarding: string;

  @ApiProperty({
    description: 'Cobb angle measure',
    example: '10º',
  })
  @IsString()
  @IsNotEmpty()
  angleCobb: string;

  @ApiProperty({
    description: 'Return date',
    example: '20/02/2022',
  })
  @IsString()
  @IsNotEmpty()
  returnDate: string;

  @ApiProperty({
    description: 'Observations about the patient',
    example: 'Continuous progression of the deformity during outpatient medical follow-up',
  })
  @IsNotEmpty()
  @IsUUID()
  note: string;

  @ApiProperty({
    description: 'Student`s ID',
    example: '',
  })
  @IsNotEmpty()
  @IsUUID()
  student: string;
}
