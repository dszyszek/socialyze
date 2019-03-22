import axios from 'axios';
import {GET_POSTS} from './types';


export const getPosts = () => dispatch => {
    axios.get(`http://localhost:3000/api/posts`)
        .then(res => {
            console.log(res, 'from postActions');
            dispatch({
                type: GET_POSTS,
                payload: res
            });
        })
        .catch(e => console.log(e));
};