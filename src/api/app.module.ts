import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma/prisma.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, TodoModule, AuthModule, UserModule],
})
export class AppModule {}
