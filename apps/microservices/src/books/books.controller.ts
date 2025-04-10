import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: { name: string }) {
    return this.booksService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string }) {
    return this.booksService.update(Number(id), body.name);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.booksService.delete(Number(id));
  }
}
