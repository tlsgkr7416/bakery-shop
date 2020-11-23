import { REQUEST_REPLY, REPLY_UPDATE, REPLY_DELETE } from './actionTypes';

const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_REPLY:
            return [...action.payload];
        case REPLY_UPDATE:
            return [action.payload, ...state];
        case REPLY_DELETE:
            return state.filter(item => {
                return item.id !== action.payload;
            });
        
        default:
            return state;
    }
}