import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import block from './block/reducer';
import apartment from './apartment/reducer';
import dweller from './dweller/reducer';

export default combineReducers({
  auth,
  user,
  block,
  apartment,
  dweller,
});
