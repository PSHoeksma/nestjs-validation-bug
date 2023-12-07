import { IsString, IsNotEmpty } from 'class-validator';

export class AccountCreateDto {
  @IsString()
  @IsNotEmpty()
  public email: string;
}
