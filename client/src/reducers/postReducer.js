import {GET_POSTS, ADD_LIKE} from '../actions/types';

const initialState = {
    data: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                data: action.payload.data
            };
        case ADD_LIKE:
            return {
                ...state
            }
        default: 
            return state;
    }
};