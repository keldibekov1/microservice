import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(book => book.id === id);
  }

  create(book: { name: string }) {
    const newBook = { id: Date.now(), ...book };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, updated: { name: string }) {
    const index = this.books.findIndex(book => book.id === id);
    if (index === -1) return null;
    this.books[index] = { ...this.books[index], ...updated };
    return this.books[index];
  }

  delete(id: number) {
    const index = this.books.findIndex(book => book.id === id);
    if (index === -1) return null;
    const deleted = this.books.splice(index, 1);
    return deleted[0];
  }
}
