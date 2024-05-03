import { Module } from '@nestjs/common';
import { PrismaModule } from './db/prisma/prisma.module';
import { TodoModule } from './api/todo/todo.module';
import { AuthModule } from './api/auth/auth.module';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [PrismaModule, TodoModule, AuthModule, UserModule],
})
export class AppModule {}
