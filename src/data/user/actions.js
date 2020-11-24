import { USER_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './actionTypes';

export const userRequest = () => ({
    type: USER_REQUEST, 
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const loginFail = (payload) => ({
    type: LOGIN_FAIL, 
    payload,
});

export const fetchUser = () => {
    return async (dispatch) => {
        dispatch(userRequest());
        const response = await fetch('/home')
           .then(res => res.json())
           .catch((error) => dispatch(loginFail(error.message)));
        dispatch(loginSuccess(response));
    }
}
