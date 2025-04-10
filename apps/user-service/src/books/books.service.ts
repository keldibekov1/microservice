import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll() {
    return [{ id: 1, name: 'Book 1' }, { id: 2, name: 'Book 2' }];
  }
}
