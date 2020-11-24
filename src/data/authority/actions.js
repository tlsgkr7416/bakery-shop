import { AUTHORITY_REQUEST, AUTHORITY_SUCCESS, AUTHORITY_FAIL } from './actionTypes';

export const authorityRequest = () => ({
    type: AUTHORITY_REQUEST, 
});

export const authoritySuccess = (payload) => ({
    type: AUTHORITY_SUCCESS,
    payload,
});

export const authorityFail = (payload) => ({
    type: AUTHORITY_FAIL, 
    payload,
});

export const fetchAuthority = () => {
    return async (dispatch) => {
        dispatch(authorityRequest());
        const response = await fetch('/account/authority')
           .then(res => res.json())
           .catch((error) => {
               dispatch(authorityFail(error.message));
               window.location.href="http://localhost:3000/";
            });
        dispatch(authoritySuccess(response.id));
    }
}
