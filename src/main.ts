import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const allowedOrigins = process.env.IP_LIST.split (',') || '';
  const app = await NestFactory.create(AppModule, { 
    cors: {
      origin: allowedOrigins,
    }
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Coluna Reta')
    .setDescription(
      'Aplicação para visualização e cadastro de alunos com enfermidade na coluna.',
    )
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('user')
    .addTag('student')
    .addTag('institute')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
