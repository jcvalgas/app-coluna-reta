import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { InstitutesService } from './institutes.service';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/utils/logged-user.decorator';
import { User } from 'src/users/entities/user.entity';

@UseGuards(AuthGuard())
@ApiBearerAuth()
@ApiTags('institute')
@Controller('institutes')
export class InstitutesController {
  constructor(private readonly institutesService: InstitutesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a institute',
  })
  create(@Body() createInstituteDto: CreateInstituteDto, @LoggedUser() user: User) {
    return this.institutesService.create(createInstituteDto, user);
  }

  @Get()
  @ApiOperation({
    summary: 'View all institutes',
  })
  findAll() {
    return this.institutesService.findAll();
  }

 /*@Get('/students')
 findAllStudents() {
   return this.institutesService.findAllStudents();
  }*/
  

  @Get(':id')
  @ApiOperation({
    summary: 'View institutes by id',
  })
  findOne(@Param('id') id: string) {
    return this.institutesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit institutes by id',
  })
  update(
    @Param('id') id: string,
    @Body() updateInstituteDto: UpdateInstituteDto,
    @LoggedUser() user: User
  ) {
    return this.institutesService.update(id, updateInstituteDto, user);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete institutes by id or email',
  })
  remove(@Param('id') id: string, @LoggedUser() user: User) {
    return this.institutesService.remove(id, user);
  }
}
