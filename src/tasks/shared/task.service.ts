import { Injectable, NotFoundException } from '@nestjs/common';
// import { Task } from './task';
import { PrismaService } from 'src/prisma.service';
import { TaskDto, UpdateTaskDto } from './TaskDto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }

  async getById(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
      throw new NotFoundException(`Task ID ${id} not found ! `);
    }

    return task;
  }

  async create(data: TaskDto) {
    const task = await this.prisma.task.create({ data });
    return task;
  }

  async update(id: number, data: UpdateTaskDto) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
      throw new NotFoundException(`Can't Update - Task ID ${id} not found ! `);
    }
    const tasku = await this.prisma.task.update({
      where: { id: id },
      data,
    });
    return tasku;
  }
  async remove(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
      throw new NotFoundException(`Can't Remove - Task ID ${id} not found ! `);
    }
    const taskr = await this.prisma.task.delete({
      where: { id },
    });
    return taskr;
  }
}
