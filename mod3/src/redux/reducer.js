import {SAVE_USER} from './type';

const initialDate = {
    user_logged:'',
    name:'',
    lastname:''
}

const userReducer = (state = inicialData, action) => {
    switch (action.type){
        case SAVE_USER:{
                return {
                    ...state,
                    user_logged:action.payload
                }
        }
        default:
            return state;
    }
};

export default userReducer;
