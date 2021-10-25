import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    
    async execute( { tag_id, user_sender, user_receiver, message }: IComplimentRequest ){

        // Verifica se o usuario nao esta enviando um comentario para si mesmo
        if (user_receiver === user_sender){
            throw new Error('You can not create a compliment about yourself');
        }

        // Verifica se o usuário para o qual a mensagem sera enviada existe.
        const usersRepositories = getCustomRepository(UsersRepositories);
        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if(!userReceiverExists) {
            throw new Error('User receiver not found');
        };

        // Cria uma linha na tabela compliments passando as informações inseridas
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }

};

export { CreateComplimentService };