import TYPES from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.USE_SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case TYPES.USE_SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        signed: true,
        loading: false,
      };
    case TYPES.USE_SIGN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default auth;
