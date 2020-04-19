import TYPES from './types';

export function listRequest(page) {
  console.log('chamado dweller ', page);
  return {
    type: TYPES.DWELLER_LIST_REQUEST,
    payload: { page },
  };
}

export function listSuccess(data) {
  return {
    type: TYPES.DWELLER_LIST_SUCCESS,
    payload: { data },
  };
}

export function listFailure() {
  return {
    type: TYPES.DWELLER_LIST_FAILURE,
  };
}

export function saveRequest(data) {
  return {
    type: TYPES.DWELLER_SAVE_REQUEST,
    payload: { data },
  };
}
export function deleteRequest(id) {
  return {
    type: TYPES.DWELLER_DELETE_REQUEST,
    payload: { id },
  };
}
