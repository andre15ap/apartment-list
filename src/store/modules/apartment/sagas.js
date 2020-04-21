import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { listFailure, listRequest, listSuccess } from './actions';
import TYPES from './types';

export function* getAllApartmentsRequest({ payload }) {
  try {
    const { page = 1 } = payload;
    const response = yield call(api.get, `/apartments?page=${page}`);
    yield put(listSuccess(response.data));
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Error, Verifique os campos');
    }
    yield put(listFailure());
  }
}

export function* saveApartmentsRequest({ payload }) {
  try {
    const { id, ...rest } = payload.data;
    if (id) {
      yield call(api.put, `/apartments/${id}`, rest);
      toast.success('Editado com sucesso!');
      yield put(listRequest(1));
    } else {
      yield call(api.post, `/apartments`, rest);
      toast.success('Criado com sucesso!');
      yield put(listRequest(1));
    }
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Error, Verifique os campos');
    }
  }
}

export function* deleteApartmentsRequest({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/apartments/${id}`);
    toast.success('Deletado com sucesso!');
    yield put(listRequest(1));
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Error, Verifique os campos');
    }
  }
}

export default all([
  takeLatest(TYPES.APARTMENT_LIST_REQUEST, getAllApartmentsRequest),
  takeLatest(TYPES.APARTMENT_SAVE_REQUEST, saveApartmentsRequest),
  takeLatest(TYPES.APARTMENT_DELETE_REQUEST, deleteApartmentsRequest),
]);
