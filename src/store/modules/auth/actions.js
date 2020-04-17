import TYPES from './types';

export function signInRequest(email, password) {
  return {
    type: TYPES.USE_SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: TYPES.USE_SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: TYPES.USE_SIGN_FAILURE,
  };
}
