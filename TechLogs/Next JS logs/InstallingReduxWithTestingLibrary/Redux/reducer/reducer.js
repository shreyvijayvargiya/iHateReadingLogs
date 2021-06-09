import { ADD_TRACKS, ADD_TRACK_NAME } from '../constants';

const initialState = {
    tracks: [],
    trackName: ""
};
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TRACKS:{
            return {
                ...state, 
                tracks: action.payload
            }
        }
        case ADD_TRACK_NAME: {
            return {
                ...state, 
                trackName: action.payload
            }
        }
        default:
            return state;
    };
};
