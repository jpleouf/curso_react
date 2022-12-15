import {CREATE_USER,SAVE_USER} from './type';
import {SAVE_INFORMATIONS} from './type';

const initialState = {
    user_logged:'',
    name:'',
    lastname:'',
    user_data:{},
    informations:''
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_USER:{
            return {
                ...state,
                user_data:action.payload
            }
    }
    case SAVE_USER:{
        return {
            ...state,
            user_logged:action.payload
        }
}
case SAVE_INFORMATIONS:{
        return {
            ...state,
            informations:action.payload
        }
    }
    default:
            return state;
    }
};

export default userReducer;
