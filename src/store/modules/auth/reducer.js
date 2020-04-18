import TYPES from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.AUTH_SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case TYPES.AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        signed: true,
        loading: false,
      };
    case TYPES.AUTH_SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case TYPES.AUTH_SIGN_UP_SUCCESS:
      return { ...state, loading: false };
    case TYPES.AUTH_SIGN_FAILURE:
      return { ...state, loading: false };
    case TYPES.AUTH_SIGN_OUT:
      return { ...state, token: null, signed: false };
    default:
      return state;
  }
}

export default auth;
