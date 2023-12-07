import { Body, Controller, Post } from '@nestjs/common';
import { CrudControllerMixin } from './crud.controller.mixin';
import { PersonCreateDto } from './dto/person.create.dto';
import { PersonUpdateDto } from './dto/person.update.dto';
import { Person } from './person.entity';
import { AccountCreateDto } from './dto/account.create.dto';

@Controller('persons')
export class PersonController extends CrudControllerMixin<
  Person,
  PersonCreateDto,
  PersonUpdateDto
>() {
  @Post(':id/accounts')
  public createAccount(@Body() data: AccountCreateDto) {
    return data;
  }
}
