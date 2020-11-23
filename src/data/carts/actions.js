import { CART_REQUEST, CART_SUCCESS, CART_FAIL, CART_REMOVE_ITEM, CART_ADD_ITEM } from './actionTypes';

export const cartRequest = () => {
    return {
        type: CART_REQUEST
    }
}

export const cartSuccess = (payload) => {
    return {
        type: CART_SUCCESS,
        payload,
    };
}

export const cartFail = (payload) => {
    return {
        type: CART_FAIL,
        payload,
    };
}

export const cartRemoveItem = (payload) => {
    return {
        type: CART_REMOVE_ITEM,
        payload,
    };
}

export const cartAddItem = (payload) => {
    return {
        type: CART_ADD_ITEM,
        payload,
    };
}

export const fetchCart = () => {
    return async (dispatch) => {
        dispatch(cartRequest());
        const response = await fetch('/cart')
           .then(res => res.json())
           .catch((error) => dispatch(cartFail(error.message)));
        dispatch(cartSuccess(response));
    }
}
