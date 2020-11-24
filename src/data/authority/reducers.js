import { AUTHORITY_REQUEST, AUTHORITY_SUCCESS, AUTHORITY_FAIL } from './actionTypes';

const initialState = {
    loding: false,
    data: null,
    error: null,
}

export default function user (state = initialState, action) {
    switch (action.type) {
        case AUTHORITY_REQUEST:
            return {
                ...state, loding: true,
            }

        case AUTHORITY_SUCCESS:
            return {
                ...state, 
                loding: false,
                data: action.payload,
            }

        case AUTHORITY_FAIL:
            return {
                ...state,
                loding: false,
                error: action.payload,
            }

        default:
            return state;
    }
};