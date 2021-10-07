import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ParseIntPipe } from '@nestjs/common';

import { TaskDto, UpdateTaskDto } from './shared/TaskDto';
import { TaskService } from './shared/task.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }
  // @Param('id', ParseIntPipe) id: number): Promise<Task>
  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: TaskDto): Promise<Task> {
    return this.taskService.create(task);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() task: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.taskService.remove(id);
  }
}
