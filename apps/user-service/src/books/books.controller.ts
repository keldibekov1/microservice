import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern({ cmd: 'book.findAll' })
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern({ cmd: 'book.findOne' })
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern({ cmd: 'book.create' })
  create(@Payload() data: { name: string }) {
    return this.booksService.create(data);
  }

  @MessagePattern({ cmd: 'book.update' })
  update(@Payload() data: { id: number; name: string }) {
    return this.booksService.update(data.id, { name: data.name });
  }

  @MessagePattern({ cmd: 'book.delete' })
  delete(@Payload() id: number) {
    return this.booksService.delete(id);
  }
}
