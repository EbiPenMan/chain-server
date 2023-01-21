import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import {DocumentBuilder, SwaggerCustomOptions, SwaggerDocumentOptions, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
      // new FastifyAdapter({ logger: true })
  );
  
  const config = new DocumentBuilder()
      .setTitle('Chain Server')
      .setDescription('The chain API description')
      .setVersion('1.0')
      .addBasicAuth()
      .build();
  
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true
  };
  
  const document = SwaggerModule.createDocument(app, config,options);
  
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Chain API Docs'
  }
  
  SwaggerModule.setup('api', app, document,customOptions);
  
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
