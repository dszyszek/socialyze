import isEmpty from 'lodash/isEmpty';

import {SET_CURRENT_USER} from '../actions/types';

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
            }
        default: {
            return state;
        }
    }
};
