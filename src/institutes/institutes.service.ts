import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';

@Injectable()
export class InstitutesService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(dto: CreateInstituteDto) {
    return 'This action adds a new institute';
  }

  async findAll() {
    return `This action returns all institutes`;
  }

  // async findAllStudents() {
  //   return await this.prisma.students.findMany({
  //     include: {
  //       students: {
  //         select: {
  //           id: true,
  //           name: true,
  //         },
  //       },
  //     },
  //   });
  // }

  async findOne(id: string) {
    return `This action returns a #${id} institute`;
  }

  async update(id: string, dto: UpdateInstituteDto) {
    return `This action updates a #${id} institute`;
  }

  async remove(id: string) {
    return `This action removes a #${id} institute`;
  }
}
