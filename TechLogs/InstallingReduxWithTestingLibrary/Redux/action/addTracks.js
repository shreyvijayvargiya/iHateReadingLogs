import { ADD_TRACKS } from '../constants';

export const addSamplesInTracks = (data) => {
    return async dispatch => {
        dispatch({
            type: ADD_TRACKS,
            payload: data
        });
    };
};

