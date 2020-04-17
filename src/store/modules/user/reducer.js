import TYPES_AUTH from '../auth/types';

const INITIAL_SATATE = {
  profile: null,
};

export default function user(state = INITIAL_SATATE, action) {
  switch (action.type) {
    case TYPES_AUTH.USE_SIGN_IN_SUCCESS:
      return { ...state, profile: action.payload.user };
    default:
      return state;
  }
}
