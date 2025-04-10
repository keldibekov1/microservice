import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_SERVICE') private client: ClientProxy) {}

  findAll() {
    return this.client.send({ cmd: 'book.findAll' }, {});
  }

  findOne(id: number) {
    return this.client.send({ cmd: 'book.findOne' }, id);
  }

  create(data: { name: string }) {
    return this.client.send({ cmd: 'book.create' }, data);
  }

  update(id: number, name: string) {
    return this.client.send({ cmd: 'book.update' }, { id, name });
  }

  delete(id: number) {
    return this.client.send({ cmd: 'book.delete' }, id);
  }
}
