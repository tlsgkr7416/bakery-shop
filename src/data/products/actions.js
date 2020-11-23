import { REQUEST_PRODUCTS, LODING_SUCCESS, LODING_FAIL, UPDATE_PRODUCTS } from './actionTypes';

export const requestProducts = () => ({
    type: REQUEST_PRODUCTS,
});

export const lodingSuccess = (payload) => ({
    type: LODING_SUCCESS,
    payload,
});

export const lodingFail = (payload) => ({
    type: LODING_FAIL,
    payload,
});

export const updateProducts = (payload) => ({
    type: UPDATE_PRODUCTS,
    payload,
});

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(requestProducts());  //dispatch, fetch 데이터 받아오는 순서
        const response = await fetch('/home/products')
            .then(res => res.json())
            .catch(error => lodingFail(error.message));
        dispatch(lodingSuccess(response));
    }
} 
