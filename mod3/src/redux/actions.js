import {SAVE_USER} from './type';

export const setSaveUserLogged = (userName) => {
    return {
        type: SAVE_USER,
        payload: userName
    }
}

//export default setSaveUserLogged;