import { combineReducers } from 'redux';
import user from '../data/user/reducers';
import products from '../data/products/reducers';
import carts from '../data/carts/reducers';
import replys from '../data/reply/reducers';
import authority from '../data/authority/reducers';

export default combineReducers({
      user,
      products,
      carts,
      replys,
      authority,
});