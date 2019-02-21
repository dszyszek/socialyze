import {GET_ERRORS} from './types';
import axios from 'axios';

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