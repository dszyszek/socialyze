import axios from 'axios';
import {GET_POSTS, ADD_LIKE} from './types';


export const getPosts = () => dispatch => {
    axios.get(`http://localhost:3000/api/posts`)
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res
            });
        })
        .catch(e => console.log(e));
};

export const addLike = (id) => dispatch => {
    axios.post(`http://localhost:3000/api/posts/like/${id}`)
    .then(res => {
        dispatch({
            type: ADD_LIKE
        });
    })
    .catch(e => console.log(e));
};