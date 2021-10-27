import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { dto } from '../dtos/ListTagsDTO';




class ListTagsService {

    async execute() {

        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        return dto(tags);

    }

}

export { ListTagsService }