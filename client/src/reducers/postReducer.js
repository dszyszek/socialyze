import {GET_POSTS, HANDLE_LIKE, ADD_POST} from '../actions/types';

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
                    const newData = d;
                    newData.likes = action.payload.data;
                    // console.log(newData, 'newData from postReducer');
                    return {
                        data: [newData]
                    }
                }
            })
            return dataArray[0];
        // case ADD_POST:
        //     return {
        //         ...state,
        //         data: [action.payload, ...state.data]
        //     };

        default: 
            return state;
    }
};