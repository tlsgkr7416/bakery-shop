import { REQUEST_PRODUCTS, LODING_SUCCESS, LODING_FAIL, UPDATE_PRODUCTS } from './actionTypes';

const initialState = {
    loding: false,
    data: [],
    kindData: [],
    error: null,
};

export default (state = initialState, action) => {
   switch (action.type) {
       case REQUEST_PRODUCTS:
           return {
               ...state, loding: true,
           }
        
        case LODING_SUCCESS:
            return {
                ...state, 
                loding: false,
                data: [...action.payload],
                kindData: [...action.payload],
            }
        
        case LODING_FAIL:
            return {
                ...state,
                loding: false,
                error: action.payload,
            }
        
        case UPDATE_PRODUCTS:
            return {
                ...state,
                kindData: state.data.filter(product => {
                    if (action.payload.kind === '모두') {
                        return product;
                    } else if (product.kind === action.payload.kind) {
                        return product;
                    } else if (product.name.indexOf(action.payload.search) > -1) {
                        return product;
                    } 
                }),
            }
        
        default:
            return state;
   }
}