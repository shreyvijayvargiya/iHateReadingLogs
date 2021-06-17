import { USER_DATA, REMOVE_USER } from '../constants';

export const setUserInStore = (payload) => {
    return async dispatch => {
        dispatch({ type: USER_DATA, payload: payload });
    };
};

export const removeUserFromStore = () => {
    return async dispatch => {
        dispatch({ type: REMOVE_USER });
    };
};

