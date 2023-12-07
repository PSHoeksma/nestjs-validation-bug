import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class PersonUpdateDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public firstName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public lastName?: string;
}
