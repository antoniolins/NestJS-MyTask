import { Injectable } from '@nestjs/common';
// import { Task } from './task';
import { PrismaService } from 'src/prisma.service';
import { TaskDto } from './TaskDto';

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
      console.log('entrei aqui');
      throw Error(`Task ID ${id} not found ! `);
    }

    return task;
  }

  async create(data: TaskDto) {
    const task = await this.prisma.task.create({ data });
    return task;
  }

  async update(id: number, data: TaskDto) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
      throw Error(`Task ID ${id} not found ! `);
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
      throw Error(`Task ID ${id} not found ! `);
    }
    const taskr = await this.prisma.task.delete({
      where: { id },
    });
    return taskr;
  }
}
