import { INCREASE, DECREASE, NO } from './actionTypes';

const initiasState = 0;

export default function count (state = initiasState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        case NO:
            return state;
        default:
            return state; 
    };
};