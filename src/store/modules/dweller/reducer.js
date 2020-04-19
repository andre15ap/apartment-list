import TYPES from './types';

const INITIAL_SATATE = {
  dwellers: [],
  loading: false,
  page: 1,
  hasMore: true,
};

function dweller(state = INITIAL_SATATE, action) {
  switch (action.type) {
    case TYPES.DWELLER_LIST_REQUEST:
      return {
        ...state,
        page: action.payload.page,
        dwellers: action.payload.page === 1 ? [] : state.dwellers,
        loading: true,
      };
    case TYPES.DWELLER_LIST_SUCCESS:
      return {
        ...state,
        dwellers: [...state.dwellers, ...action.payload.data],
        page: state.page + 1,
        loading: false,
        hasMore: !(action.payload.data.length < 15),
      };
    case TYPES.DWELLER_LIST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default dweller;
