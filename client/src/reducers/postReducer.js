import {GET_POSTS, HANDLE_LIKE} from '../actions/types';

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
        case HANDLE_LIKE:
            const dataArray = state.data.map((d, i) => {
                if (d._id === action.payload.id) {
                    d.likes = action.payload.data
                    return {
                        data: [d]
                    }
                }
            })
            return dataArray[0];

        default: 
            return state;
    }
};