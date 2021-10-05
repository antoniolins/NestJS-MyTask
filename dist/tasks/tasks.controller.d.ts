import { TaskDto, UpdateTaskDto } from './shared/TaskDto';
import { TaskService } from './shared/task.service';
import { Task } from '@prisma/client';
export declare class TasksController {
    private taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<Task[]>;
    getById(id: number): Promise<Task>;
    create(task: TaskDto): Promise<Task>;
    update(id: number, task: UpdateTaskDto): Promise<Task>;
    remove(id: number): Promise<Task>;
}
