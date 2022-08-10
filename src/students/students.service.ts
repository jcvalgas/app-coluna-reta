import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStudentDto) {
    return await this.prisma.student.create({
      data: dto,
      select: {
        name: true,
        photo: true,
        description: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.student.findMany({
      select: {
        name: true,
        photo: true,
        description: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.student.findUnique({
      where: { id },
      include: {
        institute: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async update(id: string, dto: UpdateStudentDto) {
    const data: Partial<Student> = { ...dto };
    return await this.prisma.student.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.prisma.student.delete({
      where: {
        id,
      },
    });
    return { message: 'Student successfully deleted' };
  }
}
