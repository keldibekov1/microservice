import { Module } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { UserModule } from './user/user.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UserModule, BooksModule],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}
