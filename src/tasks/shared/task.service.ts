import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TaskDto, UpdateTaskDto } from './TaskDto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.task.findMany();
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
    return await this.prisma.task.create({ data });
  }

  async update(id: number, data: UpdateTaskDto) {
    let tasku = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!tasku) {
      throw new NotFoundException(`Can't Update - Task ID ${id} not found ! `);
    }
    const taskup = await this.prisma.task.update({
      where: { id: id },
      data,
    });
    return taskup;
  }
  async remove(id: number) {
    const taskr = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!taskr) {
      throw new NotFoundException(`Can't Remove - Task ID ${id} not found ! `);
    }
    const taskd = await this.prisma.task.delete({
      where: { id },
    });
    return taskd;
  }
}
