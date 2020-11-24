import { combineReducers } from 'redux';
import count from '../data/count/reducers';
import user from '../data/user/reducers';
import products from '../data/products/reducers';
import carts from '../data/carts/reducers';
import replys from '../data/reply/reducers';
import authority from '../data/authority/reducers';

export default combineReducers({
      count,
      user,
      products,
      carts,
      replys,
      authority,
});