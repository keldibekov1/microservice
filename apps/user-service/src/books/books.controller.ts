import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BooksService } from './books.service';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern({ cmd: 'book.findAll' })
  findAll() {
    return this.booksService.findAll();
  }
}
