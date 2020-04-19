import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { listFailure, listRequest, listSuccess } from './actions';
import TYPES from './types';

export function* getAllBlocksRequest({ payload }) {
  try {
    const { page = 1 } = payload;
    const response = yield call(api.get, `/blocks?page=${page}`);
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

export function* saveBlocksRequest({ payload }) {
  try {
    const { identifier, id } = payload.data;
    if (id) {
      yield call(api.put, `/blocks/${id}`, { identifier });
      toast.success('Editado com sucesso!');
    } else {
      yield call(api.post, `/blocks`, { identifier });
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

export function* deleteBlocksRequest({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/blocks/${id}`);
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
  takeLatest(TYPES.BLOCK_LIST_REQUEST, getAllBlocksRequest),
  takeLatest(TYPES.BLOCK_SAVE_REQUEST, saveBlocksRequest),
  takeLatest(TYPES.BLOCK_DELETE_REQUEST, deleteBlocksRequest),
]);
