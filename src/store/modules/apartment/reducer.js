import TYPES from './types';
import PAGES from '../../../constants/pagesPagination';

const INITIAL_SATATE = {
  apartments: [],
  loading: false,
  page: 1,
  hasMore: true,
};

function apartment(state = INITIAL_SATATE, action) {
  switch (action.type) {
    case TYPES.APARTMENT_LIST_REQUEST:
      return {
        ...state,
        page: action.payload.page,
        apartments: action.payload.page === 1 ? [] : state.apartments,
        loading: true,
      };
    case TYPES.APARTMENT_LIST_SUCCESS:
      return {
        ...state,
        apartments: [...state.apartments, ...action.payload.data],
        page: state.page + 1,
        loading: false,
        hasMore: !(action.payload.data.length < PAGES),
      };
    case TYPES.APARTMENT_LIST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default apartment;
