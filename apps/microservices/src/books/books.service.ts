import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_SERVICE') private client: ClientProxy) {}

  findAll() {
    return this.client.send({ cmd: 'book.findAll' }, {});
  }
}
