import {v4 as uuidv4} from 'uuid';

export const parseCompaniesJsonData = (json: any) => {
    const idUnico = uuidv4();
    return {
        ...json,
        id: idUnico,
    };
}

export function generateUniqueId() {
    return uuidv4();
}
