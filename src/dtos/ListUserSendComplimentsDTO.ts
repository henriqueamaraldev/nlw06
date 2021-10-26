import { Compliment } from '../entities/Compliment'


const dto = (data: Compliment[]) => {

    const newList = data.map((value) => {

        var NewObject = {
            Tag: value.tagId.name,
            Receiver: value.userReceiver.name,
            Message: value.message,
            Date: value.created_at
        };

        return NewObject;
    })
    return newList;
}


export { dto };
