import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { classToPlain } from 'class-transformer';
import { dto } from '../dtos/agendamentoDTO';


class ListUserSendComplimentsService {

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            },
            relations: ["userReceiver", "tagId"]
        })

        return dto(compliments);
    }

}

export { ListUserSendComplimentsService };