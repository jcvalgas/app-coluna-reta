import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  private studentSelect = {
    id: true,
    name: true,
    photo: true,
    description: true,
  };
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStudentDto) {
    return await this.prisma.student.create({
      data: dto
      select: this.studentSelect,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({ select: this.studentSelect });
  }

  async findOne(id: string) {
    return `This action returns a #${id} student`;
  }

  async update(id: string, dto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  async remove(id: string) {
    return `This action removes a #${id} student`;
  }
}
