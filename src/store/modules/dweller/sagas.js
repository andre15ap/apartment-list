import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { listFailure, listRequest, listSuccess } from './actions';
import TYPES from './types';

export function* getAllDwellersRequest({ payload }) {
  try {
    const { page = 1, apartmentId, name } = payload;
    const response = yield call(
      api.get,
      `/dwellers?page=${page}&name=${name}&apartment_id=${apartmentId || ''}`
    );
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

export function* saveDwellersRequest({ payload }) {
  try {
    const { id, ...rest } = payload.data;
    if (id) {
      yield call(api.put, `/dwellers/${id}`, rest);
      toast.success('Editado com sucesso!');
    } else {
      yield call(api.post, `/dwellers`, rest);
      toast.success('Criado com sucesso!');
    }

    yield put(listRequest(1));
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Error, Verifique os campos');
    }
  }
}

export function* deleteDwellersRequest({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/dwellers/${id}`);
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
  takeLatest(TYPES.DWELLER_LIST_REQUEST, getAllDwellersRequest),
  takeLatest(TYPES.DWELLER_SAVE_REQUEST, saveDwellersRequest),
  takeLatest(TYPES.DWELLER_DELETE_REQUEST, deleteDwellersRequest),
]);
