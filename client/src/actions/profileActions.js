import axios from 'axios';

import {GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE, CLEAR_ERRORS, SET_EDUCATION, UPDATE_EXPERIENCE_ARRAY, UPDATE_EDUCATION_ARRAY, UPDATE_PROFILES_ARRAY} from './types';
import {logoutUser} from './authActions';

export const getCurrentProfile = () => dispatch => {
    loadProfile();

    axios.get('http://localhost:3000/api/profile/me')
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

export const createProfile = (data, history) => dispatch => {
    axios.post('http://localhost:3000/api/profile/me', data)
        .then(res => history.push('/Dashboard'))
        .catch(e => {
            return dispatch({
                type: GET_ERRORS,
                payload: e.response.data
            });
        })
};

export const deleteProfile = (history) => dispatch => {
    axios.delete('http://localhost:3000/api/profile/')
    .then(res => {
        dispatch(logoutProfile());
        dispatch(logoutUser());

        history.push('/SignUp');
    })
    .catch(e => console.log(e));
};

export const clearErrors = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    });
};

export const setEducation = (educationData, history, route) => dispatch => {
    axios.post(`http://localhost:3000/api/profile/${route}`, educationData)
    .then(res => {
        dispatch({
        type: SET_EDUCATION,
        payload: educationData
        })
        history.push('/Dashboard');
    })
    .catch(e => dispatch({
        type: GET_ERRORS,
        payload: e.response.data
    }));
    
};

export const updateExperienceArray = (expID, newExpArray, whichTable) => dispatch => {
    axios.delete(`http://localhost:3000/api/profile/${whichTable}/${expID}`)
    .then(res => {
        if (whichTable === 'experience') {
            dispatch({
                type: UPDATE_EXPERIENCE_ARRAY,
                payload: newExpArray
            });
        } else {
            dispatch({
                type: UPDATE_EDUCATION_ARRAY,
                payload: newExpArray
            });
        }  
    })
    .catch(e => console.log(e));

};

export const getAllUsers = () => dispatch => {
    axios.get('http://localhost:3000/api/profile/all')
    .then(res => {
        dispatch({
            type: UPDATE_PROFILES_ARRAY,
            payload: res.data
        });
    })
    .catch(e => console.log(e))
};