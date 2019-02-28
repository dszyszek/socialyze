import {GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, SET_EDUCATION} from '../actions/types';

const initialState = {
    profile: null,
    profiles: null,
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            }; 
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            }; 
        case SET_EDUCATION: 
            state.profile.education.push(action.payload);
            return {
                ...state,
                [state.profile.education]: state.education
            }
        default: 
            return state;
    }
};