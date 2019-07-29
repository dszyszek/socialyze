import isEmpty from 'lodash/isEmpty';

import {SET_CURRENT_USER, UPDATE_PHOTO} from '../actions/types';

const initialState = {
    auth: false,
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                auth: !isEmpty(action.payload),
                user: action.payload
            };
            case UPDATE_PHOTO:
            return {
                ...state,
                user: {
                    ...state.user,
                    avatar: action.payload
                }
            }
        default: {
            return state;
        }
    }
};
