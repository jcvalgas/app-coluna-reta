import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { skip } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStudentDto) {
    const data: Prisma.StudentCreateInput = {
      ...dto,
      user: {
        connect: {
          id: dto.user,
        },
      },
      institute: {
        connect: {
          id: dto.institute,
        },
      },
    };
    return await this.prisma.student
      .create({
        data,
        select: {
          id: true,
          name: true,
          birthDate: true,
          description: true,
          phoneStudent: true,
          photo: true,
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

  async findAll(skip: number) {
    return await this.prisma.student.findMany({  
      skip: skip,
      take: 20,
      orderBy: {
        name: 'asc'
      },
      select: {
        id: true,
        name: true,
        birthDate: true,
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
  
  async findMany(name: string, instituteId) {
    return await this.prisma.student.findMany({
      where: { name: {startsWith: name }, instituteId},
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
      ...dto,
      user: {
        connect: {
          id: dto.user,
        },
      },
      institute: {
        connect: {
          id: dto.institute,
        },
      },
    };
    return await this.prisma.student
      .update({
        where: { id },
        data,
        select: {
          id: true,
          name: true,
          birthDate: true,
          description: true,
          phoneStudent: true,
          photo: true,
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
