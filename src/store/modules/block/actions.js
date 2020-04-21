import TYPES from './types';

export function listRequest(page) {
  return {
    type: TYPES.BLOCK_LIST_REQUEST,
    payload: { page },
  };
}

export function listSuccess(data) {
  return {
    type: TYPES.BLOCK_LIST_SUCCESS,
    payload: { data },
  };
}

export function listFailure() {
  return {
    type: TYPES.BLOCK_LIST_FAILURE,
  };
}

export function saveRequest(data) {
  return {
    type: TYPES.BLOCK_SAVE_REQUEST,
    payload: { data },
  };
}
export function deleteRequest(id) {
  return {
    type: TYPES.BLOCK_DELETE_REQUEST,
    payload: { id },
  };
}
