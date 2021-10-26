import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { dto } from '../dtos/ListUsersDTO';



class ListUsersService {

    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();

        return dto(users);
    }

}

export { ListUsersService }