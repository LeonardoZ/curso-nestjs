import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(3000);
  app.use(cookieSession({ keys: ['asdasdasd'] }));
}
bootstrap();
