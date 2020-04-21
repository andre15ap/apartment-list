import TYPES from './types';

export function listRequest(page) {
  return {
    type: TYPES.APARTMENT_LIST_REQUEST,
    payload: { page },
  };
}

export function listSuccess(data) {
  return {
    type: TYPES.APARTMENT_LIST_SUCCESS,
    payload: { data },
  };
}

export function listFailure() {
  return {
    type: TYPES.APARTMENT_LIST_FAILURE,
  };
}

export function saveRequest(data) {
  return {
    type: TYPES.APARTMENT_SAVE_REQUEST,
    payload: { data },
  };
}
export function deleteRequest(id) {
  return {
    type: TYPES.APARTMENT_DELETE_REQUEST,
    payload: { id },
  };
}
