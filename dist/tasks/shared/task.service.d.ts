import { PrismaService } from 'src/prisma.service';
import { TaskDto, UpdateTaskDto } from './TaskDto';
export declare class TaskService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").Task[]>;
    getById(id: number): Promise<import(".prisma/client").Task>;
    create(data: TaskDto): Promise<import(".prisma/client").Task>;
    update(id: number, data: UpdateTaskDto): Promise<import(".prisma/client").Task>;
    remove(id: number): Promise<import(".prisma/client").Task>;
}
