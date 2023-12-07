import { IsString, IsNotEmpty } from 'class-validator';

export class PersonCreateDto {
  @IsString()
  @IsNotEmpty()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;
}
