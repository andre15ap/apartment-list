import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import block from './block/sagas';
import apartment from './apartment/sagas';
import dweller from './dweller/sagas';

export default function* rootSaga() {
  return yield all([auth, user, block, apartment, dweller]);
}
