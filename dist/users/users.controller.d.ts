import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    users: any;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): {
        email: string;
        name: string;
        password: string;
        id: number;
    };
    findAll(): import("./entities/user.entity").User[];
    findOne(id: number): import("./entities/user.entity").User;
    update(id: number, updateUserDto: UpdateUserDto): string | {
        email: string;
        name: string;
        password: string;
        id: number;
    };
    remove(id: number): void;
}
