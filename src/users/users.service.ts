import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/utils/handle-error.util';
import { changePassDto } from './dto/change-pass.dto';
import { Prisma } from '@prisma/client';
import { role } from 'src/utils/handle-admin.util';

@Injectable()
export class UsersService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: false,
    role: true,
    institutes: {
      select: {
        name: true,
      },
    },
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto, user: User) {
    
    const data: Prisma.UserCreateInput = {
      ...dto,
      institutes: {
        connect: dto.institutes.map((instituteId) => ({
          id: instituteId,
        })),
      },
      password: await bcrypt.hash(dto.password, 10),
    };
    return await this.prisma.user
      .create({
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async findAll() {
    return await this.prisma.user.findMany({ select: this.userSelect });
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });
  }

  async update(id: string, dto: UpdateUserDto, user: User) {
    role(user);

    return await this.prisma.user
      .update({
        where: { id },
        data: {
            ...dto,
            institutes: {
              connect: dto.institutes.map((instituteId) => ({
                id: instituteId,
              })),
            },
          },
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async remove(id: string, user: User) {
    role(user);
    await this.prisma.user.delete({ where: { id } }).catch(handleError);
    return { message: 'User successfully deleted' };
  }
}
