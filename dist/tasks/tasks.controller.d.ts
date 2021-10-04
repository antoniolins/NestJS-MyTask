import { TaskService } from './shared/task.service';
import { TaskDto } from './shared/TaskDto';
import { Task } from '@prisma/client';
export declare class TasksController {
    private taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<Task[]>;
    getById(id: string): Promise<Task>;
    create(task: TaskDto): Promise<Task>;
    update(id: number, task: TaskDto): Promise<Task>;
    remove(id: string): Promise<Task>;
}
