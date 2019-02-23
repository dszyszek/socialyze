import axios from 'axios';

import {GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE} from './types';

export const getCurrentProfile = () => dispatch => {
    loadProfile();

    axios.get('http://localhost:3000/api/users/me')
    .then(res => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    })
    .catch(e => {
        dispatch({
            type: GET_PROFILE,
            payload: {}
        });
    });
};

export const loadProfile = () => dispatch => {
    dispatch({
        type: PROFILE_LOADING
    });
};

export const logoutProfile = () => dispatch => {
    dispatch({
        type: CLEAR_CURRENT_PROFILE
    });
};