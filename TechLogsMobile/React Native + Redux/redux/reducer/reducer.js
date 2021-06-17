import { USER_DATA, REMOVE_USER } from '../constants';

const initialState = {
    loggedInUserData: {
        userId: "",
        userPhonenNumber: ""
    },
    isUserLoggedIn: false,
    clickedImages: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case USER_DATA:
            return {
                ...state, 
                loggedInUserData: { 
                    userPhonenNumber: action.payload.userPhonenNumber,
                    userId: action.paylaod.userId
                 },
                isUserLoggedIn: action.payload.isUserLoggedIn,
            }
        case REMOVE_USER: {
            return {
                ...state, 
                isUserLoggedIn: false,
                loggedInUserData: {
                    userPhonenNumber: "",
                    userId: ""
                }
            }
        }
        default:
            return state;
    }
};