import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { InstitutesModule } from './institutes/institutes.module';
import { StudentsModule } from './students/students.module';
import { HistoricModule } from './historic/historic.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    InstitutesModule,
    StudentsModule,
    HistoricModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
