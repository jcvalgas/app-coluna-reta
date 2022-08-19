import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entities/user.entity';
import { role } from 'src/utils/handle-admin.util';
import { handleError } from 'src/utils/handle-error.util';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
import { Institute } from './entities/institute.entity';

@Injectable()
export class InstitutesService {
  private selectInstitute = {
    id: true,
    name: true,
    address: true,
    students: true,
    phoneNumber: true,
  }

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateInstituteDto, user: User) {
    role(user);
    const data: Prisma.InstituteCreateInput = {
      ...dto,
      users: {
        connect: dto.users.map((usersId) => ({
          id: usersId,
        })),
      },
    };
    return await this.prisma.institute.create({ data }).catch(handleError);
  }

  async findAll() {
    return await this.prisma.institute.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.institute.findUnique({ where: { id }, select: this.selectInstitute });
  }

  async update(id: string, dto: UpdateInstituteDto, user: User) {
    role(user);
    const data: Prisma.InstituteUpdateInput = {
      ...dto,
      users: {
        connect: dto.users.map((usersId) => ({
          id: usersId,
        })),
      },
    };
    return await this.prisma.institute
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async remove(id: string, user: User) {
    role(user);
    await this.prisma.institute
    .delete({ where: { id } })
    .catch(handleError);
    return { message: 'Institute successfully deleted' };
  }
}
