import { ADD_USERS } from '../constants';

export const addUsersInStore = (data) => {
    return async dispatch => {
        dispatch({
            type: ADD_USERS,
            payload: data
        });
    };
};

