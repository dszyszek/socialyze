import {TEST_DISPATCH as type} from './types';

// Register user

export const registerUser = userData => {
    return {
        type,
        payload: userData
    }
};