import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
    constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

    findAll() {
        return this.client.send({ cmd: 'user.findAll' }, {});
    }

    findOne(id: number) {
        return this.client.send({ cmd: 'user.findOne' }, id);
    }

    create(data: { name: string }) {
        return this.client.send({ cmd: 'user.create' }, data);
    }

    update(id: number, name: string) {
        return this.client.send({ cmd: 'user.update' }, { id, name });
    }

    delete(id: number) {
        return this.client.send({ cmd: 'user.delete' }, id);
    }
}
