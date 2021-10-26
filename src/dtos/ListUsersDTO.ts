import { User } from '../entities/User'


const dto = (data: User[]) => {

    const newList = data.map((value) => {
   
        var newObject = {
            name: value.name,
            email: value.email,
            admin: value.admin,
            created_at: value.created_at,
            updated_at: value.updated_at
        };
        
        return newObject;
    })
    return newList;
}

export { dto };