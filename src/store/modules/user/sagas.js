import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { updateFailure, updateSuccess } from './actions';
import TYPES from './types';

export function* updateProfileRequest({ payload }) {
  try {
    const { name, ...rest } = payload.data;

    const profile = { name, ...(rest.oldPassword ? rest : {}) };

    const response = yield call(api.put, 'users', profile);
    toast.success('Dados atualizados com sucesso!');
    yield put(updateSuccess(response.data));
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Error, Verifique os campos');
    }
    yield put(updateFailure());
  }
}

export default all([
  takeLatest(TYPES.USER_UPDATE_REQUEST, updateProfileRequest),
]);
