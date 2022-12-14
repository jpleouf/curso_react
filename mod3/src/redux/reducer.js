import {SAVE_USER} from './type';

const initialState = {
    user_logged:'',
    name:'',
    lastname:''
}

const userReducer = (state = initialState, action) => {
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
