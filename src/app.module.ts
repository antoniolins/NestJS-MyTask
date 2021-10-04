import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TaskModule } from './task/task.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [TasksModule, TaskModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
