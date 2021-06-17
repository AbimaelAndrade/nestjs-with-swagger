import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const setupSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Swagger Docs')
    .setDescription('Documentando APIs NestJs com @nestjs/swagger')
    .setVersion('0.1.0')
    .setContact(
      'API',
      'http://localhost:3000/api/',
      'abimael.andrade@gmail.com',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
};
