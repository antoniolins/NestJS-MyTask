import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { TaskService } from './shared/task.service';
import { TaskDto } from './shared/TaskDto';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getById(+id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
  @Post()
  async create(@Body() task: TaskDto): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() task: TaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, task).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Task> {
    return this.taskService.remove(+id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
