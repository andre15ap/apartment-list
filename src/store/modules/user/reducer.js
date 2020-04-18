import TYPES_AUTH from '../auth/types';
import TYPES from './types';

const INITIAL_SATATE = {
  profile: null,
  loading: false,
};

export default function user(state = INITIAL_SATATE, action) {
  switch (action.type) {
    case TYPES_AUTH.AUTH_SIGN_IN_SUCCESS:
      return { ...state, profile: action.payload.user };
    case TYPES_AUTH.AUTH_SIGN_OUT:
      return { ...state, profile: null };
    case TYPES.USER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case TYPES.USER_UPDATE_SUCCESS:
      return { ...state, profile: action.payload.profile, loading: false };
    case TYPES.USER_UPDATE_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
