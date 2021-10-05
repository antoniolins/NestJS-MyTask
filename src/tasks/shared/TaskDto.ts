import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class TaskDto {
  id: number;
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
