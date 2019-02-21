import {GET_ERRORS} from './types';
import axios from 'axios';

// Register user

export const registerUser = userData => dispatch => {

    axios.post('http://localhost:3000/api/users/register', userData)
    .then(res => console.log(res.data))
    .catch(e => (
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        })
    ));
};