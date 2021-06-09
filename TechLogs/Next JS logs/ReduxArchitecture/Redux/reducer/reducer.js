import { ADD_USERS } from '../constants';

const initialState = {
    users: []
};
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USERS:{
            return {
                ...state, 
                users: action.payload
            }
        }
        default:
            return state;
    };
};
