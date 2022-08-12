import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';

@Injectable()
export class InstitutesService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(dto: CreateInstituteDto) {
    return await this.prisma.institute.create({
      data: dto
    });
  }

  async findAll() {
    return await this.prisma.institute.findMany({
      include: {
        students: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
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
