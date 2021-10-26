import { Compliment } from '../entities/Compliment'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService';

const dto = (data: Compliment[]) => {

    const newList = data.map((value) => {

        var NewObject = {
            Tag: value.tagId.name,
            Sender: value.userSender.name,
            Message: value.message,
            Date: value.created_at
        };

        return NewObject;
    })
    return newList;
}

export { dto };