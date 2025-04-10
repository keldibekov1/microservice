import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
    constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

    findAll() {
        return this.client.send({ cmd: 'user.findAll' }, {}); 
    }
}
