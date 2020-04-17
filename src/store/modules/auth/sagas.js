import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';
import TYPES from './types';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/auth', {
      email,
      password,
    });

    const { token, user } = response.data;
    // console.log(token);
    yield put(signInSuccess(token, user));
    history.push('/home');
  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export default all([takeLatest(TYPES.USE_SIGN_IN_REQUEST, signIn)]);
