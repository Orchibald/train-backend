import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/exception.filter';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
  
  app.enableCors();

	app.useGlobalFilters(new HttpExceptionFilter());

	await app.listen(process.env.PORT ?? 3030);
}
bootstrap();
