import { USER_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './actionTypes';

const initialState = {
    loding: false,
    data: {},
    error: null,
}

export default function user (state = initialState, action) {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state, loding: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...state, 
                loding: false,
                data: {...action.payload},
            }

        case LOGIN_FAIL:
            return {
                ...state,
                loding: false,
                error: action.payload,
            }

        default:
            return state;
    }
};