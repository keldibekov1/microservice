import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @MessagePattern({ cmd: 'user.findAll' })
    findAll() {
        return this.userService.findAll();
    }

    @MessagePattern({ cmd: 'user.findOne' })
    findOne(@Payload() id: number) {
        return this.userService.findOne(id);
    }

    @MessagePattern({ cmd: 'user.create' })
    create(@Payload() data: { name: string }) {
        return this.userService.create(data);
    }

    @MessagePattern({ cmd: 'user.update' })
    update(@Payload() data: { id: number; name: string }) {
        return this.userService.update(data.id, { name: data.name });
    }

    @MessagePattern({ cmd: 'user.delete' })
    delete(@Payload() id: number) {
        return this.userService.delete(id);
    }
}
