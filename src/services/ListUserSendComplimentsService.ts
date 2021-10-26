import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { dto } from '../dtos/ListUserSendComplimentsDTO';


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