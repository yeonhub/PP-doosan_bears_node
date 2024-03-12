import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 5000;
  await app.listen(port);
  console.log(`${port}번 서버 실행`);
}
bootstrap();