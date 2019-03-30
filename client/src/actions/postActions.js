import axios from 'axios';
import {GET_POSTS, HANDLE_LIKE, GET_ERRORS} from './types';


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

export const addPost = (info) => dispatch => {
    axios.post('http://localhost:3000/api/posts/', info)
    .then(data => {
        console.log('recived post data from postActions/addPost');

        // dispatch({
        //     type: ADD_POST,
        //     payload: info
        // });
    })
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    });
};

export const addLike = (id) => dispatch => {
    axios.post(`http://localhost:3000/api/posts/like/${id}`)
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
    .catch(e => '')
};
