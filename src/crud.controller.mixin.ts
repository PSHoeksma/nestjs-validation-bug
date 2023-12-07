import {
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

export function CrudControllerMixin<E, C, U>() {
  class CrudControllerHost {
    @Post()
    public create(@Body() data: C) {
      return data;
    }

    @Get(':id')
    public read(@Param('id', ParseIntPipe) id: number) {
      return {
        id,
      };
    }

    @Patch(':id')
    public update(@Param('id', ParseIntPipe) id: number, @Body() data: U) {
      return {
        id,
        ...data,
      };
    }

    @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number) {
      return `${id} deleted`;
    }
  }

  return CrudControllerHost;
}
