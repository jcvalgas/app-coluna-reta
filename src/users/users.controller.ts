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

  /**
   * Recebe uma requisição GET e retorna um objeto de status
   * da aplicação da URL de documentação
   * @param req Objeto de Request do Express
   * @returns Objeto de status da aplicação
   */

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  @ApiOperation({
    summary: 'Create a user',
  })
  create(@Body() dto: CreateUserDto,  @LoggedUser() user: User) {
    return this.usersService.create(dto, user);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get()
  @ApiOperation({
    summary: 'View all users',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({
    summary: 'View users by id or email',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({
    summary: 'Edit users by id email',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
    @LoggedUser() user: User
  ) {
    return this.usersService.update(id, dto, user);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete users by id or email',
  })
  remove(@Param('id') id: string, @LoggedUser() user: User) {
    return this.usersService.remove(id, user);
  }
}
