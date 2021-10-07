import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsString, IsInt, IsNotEmpty } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;
}

export class getByIdParams {
  @IsInt()
  id: number;
}

export class UpdateTaskDto extends PartialType(TaskDto) {}
