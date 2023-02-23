import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TodoDto {
  @IsString()
  @IsNotEmpty()
  note: string;
}
