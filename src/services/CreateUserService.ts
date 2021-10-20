import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)
        console.log("Email", email);
        if(!email) {
            throw new Error('Email incorrect!');
        }

        const userAlreadyExists = await usersRepositories.findOne({
            email,
        });

        if(userAlreadyExists) {
            throw new Error("Email already in use!");
        }

        const user = usersRepositories.create({
            name,
            email,
            admin
        })

        await usersRepositories.save(user);

        return user;
    }
}

export { CreateUserService }