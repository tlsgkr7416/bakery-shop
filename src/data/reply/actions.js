import { REQUEST_REPLY, REPLY_UPDATE, REPLY_DELETE } from './actionTypes';

export const requestReply = (payload) => {
    return {
        type: REQUEST_REPLY,
        payload,
    };
}

export const replyUpdate = (payload) => {
    return {
        type: REPLY_UPDATE,
        payload,
    };
}

export const replyDelete = (payload) => {
    return {
        type: REPLY_DELETE,
        payload,
    };
}