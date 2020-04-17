import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';
import { signInSuccess, signFailure, signUpSuccess } from './actions';
import TYPES from './types';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/auth', {
      email,
      password,
    });
    const { token, user } = response.data;
    yield put(signInSuccess(token, user));
    history.push('/home');
  } catch (e) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, '/users', {
      name,
      email,
      password,
    });
    toast.success('Cadastro realizado com sucesso! faça o login');
    yield put(signUpSuccess());
    history.push('/');
  } catch (e) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export default all([
  takeLatest(TYPES.AUTH_SIGN_IN_REQUEST, signIn),
  takeLatest(TYPES.AUTH_SIGN_UP_REQUEST, signUp),
]);
