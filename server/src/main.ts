import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 4000
  await app.listen(port, () => {
    console.info("Server started listening at PORT: ", port);
   });

}
bootstrap();