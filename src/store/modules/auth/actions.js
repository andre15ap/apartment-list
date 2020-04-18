import TYPES from './types';

export function signInRequest(email, password) {
  return {
    type: TYPES.AUTH_SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: TYPES.AUTH_SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: TYPES.AUTH_SIGN_FAILURE,
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: TYPES.AUTH_SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

export function signUpSuccess() {
  return {
    type: TYPES.AUTH_SIGN_UP_SUCCESS,
  };
}

export function signOut() {
  return {
    type: TYPES.AUTH_SIGN_OUT,
  };
}
