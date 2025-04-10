import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
     users = [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'Admin2' },
    ];

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id == id);
    }

    create(user: { name: string }) {
        const newUser = { id: Date.now(), ...user };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUser: { name: string }) {
        const index = this.users.findIndex(user => user.id == id);
        if (index == -1) return null;
        this.users[index] = { ...this.users[index], ...updatedUser };
        return this.users[index];
    }

    delete(id: number) {
        const index = this.users.findIndex(user => user.id == id);
        if (index == -1) return null;
        const deleted = this.users.splice(index, 1);
        return deleted[0];
    }
}
