import axios from 'axios';
import {GET_POSTS, HANDLE_LIKE, GET_ERRORS} from './types';


export const getPosts = () => dispatch => {
    axios.get(`/api/posts`)
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res
            });
        })
        .catch(e => console.log(e));
};

export const getPost = (id) => dispatch => {
    axios.get(`/api/posts/${id}`)
    .then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res
        });
    })
    .catch(e => console.log(e));
};

export const addPost = (info) => dispatch => {
    axios.post('/api/posts/', info)
    .then(data => {})
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    });
};

export const addLike = (id) => dispatch => {
    axios.post(`/api/posts/like/${id}`)
    .then(res => {
        let likes = res.data.likes;

        if (!likes) {
            return;
        }

        dispatch({
            type: HANDLE_LIKE,
            payload: {
                data: likes,
                id}
        });
    })
    .catch(e => console.log(e));
};

export const removeLike = (id) => dispatch => {
    axios.post(`/api/posts/dislike/${id}`)
    .then(res => {
        dispatch({
            type: HANDLE_LIKE,
            payload: {
                data: res.data.likes,
                id}
        });
    })
    .catch(e => '')
};

export const addComment = (id, info) => dispatch => {
    axios.post(`/api/posts/comment/${id}`, info)
    .then(data => {getPost(id)})
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    });
};