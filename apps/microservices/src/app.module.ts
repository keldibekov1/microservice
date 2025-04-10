import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BooksModule } from './books/books.module';


@Module({
  imports: [UserModule,
    ClientsModule.register([
          {
            name: 'USER_SERVICE',
            transport: Transport.TCP,
            options: {
              port: 3001,
            },
          },
        ]),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
