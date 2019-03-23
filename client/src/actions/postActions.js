import axios from 'axios';
import {GET_POSTS, HANDLE_LIKE} from './types';


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
        // console.log(res.data, 'from addLike');
        dispatch({
            type: HANDLE_LIKE,
            payload: {
                data: res.data.likes,
                id}
        });
    })
    .catch(e => console.log(e));
};

export const removeLike = (id) => dispatch => {
    axios.post(`http://localhost:3000/api/posts/dislike/${id}`)
    .then(res => {
        // console.log(res, 'from removeLike');
        dispatch({
            type: HANDLE_LIKE,
            payload: {
                data: res.data.likes,
                id}
        });
    })
    .catch(e => console.log(e))
};