export declare class TaskDto {
    description: string;
    completed: boolean;
}
export declare class getByIdParams {
    id: number;
}
declare const UpdateTaskDto_base: import("@nestjs/mapped-types").MappedType<Partial<TaskDto>>;
export declare class UpdateTaskDto extends UpdateTaskDto_base {
}
export {};
