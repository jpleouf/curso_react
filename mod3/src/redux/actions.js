import {CREATE_USER,SAVE_USER} from './type';
import {SAVE_INFORMATIONS} from './type';

export const setSaveUserLogged = (userName) => {
    return {
        type: SAVE_USER,
        payload: userName
    }
}

export const setCreateUserLogged = (body) => {
    return {
        type: CREATE_USER,
        payload: body
    }
}

export const setSaveInformations = (informations) => {
    return {
        type: SAVE_INFORMATIONS,
        payload: informations
    }
}

//export default setSaveUserLogged;