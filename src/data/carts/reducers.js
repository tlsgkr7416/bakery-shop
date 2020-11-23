import { CART_REQUEST, CART_SUCCESS, CART_FAIL, CART_REMOVE_ITEM, CART_ADD_ITEM } from './actionTypes';

const initialState = {
    loding: false,
    data: {},
    error: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CART_REQUEST:
            return {
                ...state,
                loding: true,
            }
        case CART_SUCCESS:
            return {
                ...state,
                loding: false,
                data: {...action.payload}
            }
        case CART_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case CART_REMOVE_ITEM:
            return {};
        case CART_ADD_ITEM:
            return {
                ...state,
                data: {...action.payload}
            };
        default: return state;
    }
} 