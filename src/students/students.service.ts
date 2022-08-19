import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { domainToASCII } from 'url';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStudentDto) {
    const data: Prisma.StudentCreateInput = {
      name: dto.name,
      birthDate: dto.birthDate,
      phoneStudent: dto.phoneStudent,
      photo: dto.photo,
      description: dto.description,
      user: {
        connect: {
          id: dto.userId,
        },
      },
      institute: {
        connect: {
          id: dto.instituteId,
        },
      },
    };
    return await this.prisma.student
    .create({
      data,
      select: {
        id: true,
        user: {
          select: {
            name: true,
          },
        },
        institute: {
          select: {
            name: true,
          },
        },
      },
    })
    .catch(handleError);
  }

  async findManyByPage(page: number) {
    return await this.prisma.student.findMany({
      skip: page * 3,
      take: 3,
      orderBy: {
        name: 'asc'
      },
      select: {
        id: true,
        user: {
          select: {
            name: true,
          },
        },
        institute: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.student.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        institute: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async update(id: string, dto: UpdateStudentDto) {
    const data: Prisma.StudentUpdateInput = {
      name: dto.name,
      birthDate: dto.birthDate,
      phoneStudent: dto.phoneStudent,
      photo: dto.photo,
      description: dto.description,
      user: {
        connect: {
          id: dto.userId,
        },
      },
      institute: {
        connect: {
          id: dto.instituteId,
        },
      },
    };
    return await this.prisma.student
    .update({
      where: { id },
      data,
      select: {
        user: {
          select: {
            name: true,
          },
        },
        institute: {
          select: {
            name: true,
          },
        },
      },
    })
    .catch(handleError);
  }

  async remove(id: string) {
    await this.prisma.student
    .delete({ where: { id } })
    .catch(handleError);  
    return { message: 'Student successfully deleted' }
  }
}
