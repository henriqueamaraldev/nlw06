import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { dto } from '../dtos/ListUserReceiveComplimentsDTO';



class ListUserReceiveComplimentsService {

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "tagId"]
        })
        
        return dto(compliments);
    }

}

export {ListUserReceiveComplimentsService};