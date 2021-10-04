import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class TaskDto {

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;
}
