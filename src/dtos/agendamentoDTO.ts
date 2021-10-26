import { Compliment } from '../entities/Compliment'



const dto = (data: Compliment[]) => {

    interface IRequestObject {
        id: string;
        user_sender: string;
    };

    var RequestArray: IRequestObject[];

    data.map((value) => {
        var requestObject: IRequestObject;
        requestObject.id = value.id;
        requestObject.user_sender = value.user_sender;
        RequestArray.push(requestObject)
    })
   return RequestArray;
}

export { dto };
