import axios from 'axios';
import jwt_decode from 'jwt-decode';

import {GET_ERRORS, SET_CURRENT_USER} from './types';
import setAuthToken from '../utils/setAuthToken';

// Register user

export const registerUser = (userData, history) => dispatch => {

    axios.post('http://localhost:3000/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(e => (
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        })
    ));
};

// Login user

export const loginUser = (userData, history) => dispatch => {
    axios.post('http://localhost:3000/api/users/login', userData)
    .then(res => {
        const {token} = res.data;

        localStorage.setItem('jwt_token', token);
        setAuthToken(token);

        const decodedToken = jwt_decode(token);
        dispatch(setCurrentUser(decodedToken));

        return history.push('/Dashboard');
    })
    .catch(e => (
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        })
    ));
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Logout user

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwt_token');
    
    setAuthToken(false);

    dispatch(setCurrentUser({}));
};