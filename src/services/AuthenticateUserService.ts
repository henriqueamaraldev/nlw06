import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateUserRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepository.findOne({
            email
        });

        if(!user){
            throw new Error('Email/Password incorrect')
        }

        //verificar se a senha esta correta

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error('Email/Password incorrect')
        }

        //Gerar Token
        const token = sign(
            {
              email: user.email,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
              subject: user.id,
              expiresIn: "1d",
            }
          );

        return token;
    }
};

export { AuthenticateUserService };