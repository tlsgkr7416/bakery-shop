import { INCREASE, DECREASE, NO } from './actionTypes';

export const increase = () => { 
  return {type: INCREASE};
}

export const decrease = () => { 
    return {type: DECREASE};
  }

export const no = () => {
    return {type: NO};
}