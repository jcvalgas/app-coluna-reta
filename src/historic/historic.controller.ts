import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HistoricService } from './historic.service';
import { CreateHistoricDto } from './dto/create-historic.dto';
import { UpdateHistoricDto } from './dto/update-historic.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@UseGuards(AuthGuard())
@ApiBearerAuth()
@ApiTags('historic')
@Controller('historic')
export class HistoricController {
  constructor(private readonly historicService: HistoricService) {}

  @Post()
  create(@Body() dto: CreateHistoricDto) {
    return this.historicService.create(dto);
  }

  @Get()
  findAll() {
    return this.historicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateHistoricDto) {
    return this.historicService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicService.remove(id);
  }
}
