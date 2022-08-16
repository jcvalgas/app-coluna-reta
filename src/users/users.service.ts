import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class UsersService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: false,
    role: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const data: User = {
      ...dto,
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
      where: {
        id,
      },
      select: this.userSelect,
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    const data: Partial<User> = { ...dto };
    return await this.prisma.user
    .update({
      where: { id },
      data,
      select: this.userSelect,
    })
    .catch(handleError);
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } })
    return { message: 'User successfully deleted' }
  }
}
