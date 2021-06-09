import { ADD_TRACK_NAME } from '../constants';

export const addTrackName = (data) => {
    return async dispatch => {
        dispatch({
            type: ADD_TRACK_NAME,
            payload: data
        });
    };
};

