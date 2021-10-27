import { Tag } from '../entities/Tag'


const dto = (data: Tag[]) => {

    const newList = data.map((value) => {

        function nameCustom(): string {
            return `#${value.name}`;
        }
        var newObject = {
            Name: nameCustom(),
            Created_at: value.created_at,
            Updated_at: value.updated_at,
            ID: value.id

        };
        
        return newObject;
    })
    return newList;
}

export { dto };