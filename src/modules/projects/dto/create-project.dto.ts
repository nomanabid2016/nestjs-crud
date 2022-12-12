import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateProjectDto {
  @IsNotEmpty()
  readonly title: string;
  @IsOptional()
  readonly description: string;
}
