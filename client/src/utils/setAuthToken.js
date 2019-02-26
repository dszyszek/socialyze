import axios from 'axios';

const setAuthToken = token => {
    console.log('executed setAuthToken');
    if (token) {
        axios.defaults.headers.common['x-auth'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth'];
    }
};

export default setAuthToken;