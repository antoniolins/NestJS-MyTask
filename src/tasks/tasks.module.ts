import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [TasksController],
  providers: [TaskService, PrismaService],
})
export class TasksModule {}
