import TYPES from './types';

export function updateRequest(data) {
  return {
    type: TYPES.USER_UPDATE_REQUEST,
    payload: { data },
  };
}

export function updateSuccess(profile) {
  return {
    type: TYPES.USER_UPDATE_SUCCESS,
    payload: { profile },
  };
}

export function updateFailure() {
  return {
    type: TYPES.USER_UPDATE_FAILURE,
  };
}
