import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/utils/logged-user.decorator';
import { User } from './entities/user.entity';
import { changePassDto } from './dto/change-pass.dto';


@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  @ApiOperation({
    summary: 'Create a user',
  })
  create(@Body() dto: CreateUserDto, @LoggedUser() user: User) {
    return this.usersService.create(dto, user);
  }

  @Get()
  @ApiOperation({
    summary: 'View all users',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'View users by id or email',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit users by id email',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
    @LoggedUser() user: User,
  ) {
    return this.usersService.update(id, dto, user);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete users by id or email',
  })
  remove(@Param('id') id: string, @LoggedUser() user: User) {
    return this.usersService.remove(id, user);
  }

  @ApiOperation({
    summary: 'Change user password',
  })
  @Put()
  changePass(@Body() changePassDto: changePassDto, @LoggedUser() user: User) {
    return this.usersService.changePass(changePassDto, user);
  }
}
