import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoggedUser } from '../utils/logged-user.decorator';
import { changePassDto } from 'src/users/dto/change-pass.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Recebe uma requisição GET e retorna um objeto de status
   * da aplicação da URL de documentação
   * @param req Objeto de Request do Express
   * @returns Objeto de status da aplicação
   */

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login, receiving an authentication token',
  })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Returns the currently authenticated user',
  })
  @ApiBearerAuth()
  profile(@LoggedUser() user: User) {
    return { user };
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Change user password',
  })
  @Put()
  changePass(@Body() changePassDto: changePassDto, @LoggedUser() user: User) {
    return this.authService.changePass(changePassDto, user);
  }
}
