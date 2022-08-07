import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
		summary: "Create a user",
	})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
		summary: "View all users",
	})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
		summary: "View users by id or email",
	})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
  
  @Patch(':id')
  @ApiOperation({
		summary: "Edit users by id email",
	})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
		summary: "Delete users by id or email",
	})
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
