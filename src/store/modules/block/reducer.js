import TYPES from './types';
import PAGES from '../../../constants/pagesPagination';

const INITIAL_SATATE = {
  blocks: [],
  loading: false,
  page: 1,
  hasMore: true,
};

function block(state = INITIAL_SATATE, action) {
  switch (action.type) {
    case TYPES.BLOCK_LIST_REQUEST:
      return {
        ...state,
        page: action.payload.page,
        blocks: action.payload.page === 1 ? [] : state.blocks,
        loading: true,
      };
    case TYPES.BLOCK_LIST_SUCCESS:
      return {
        ...state,
        blocks: [...state.blocks, ...action.payload.data],
        page: state.page + 1,
        loading: false,
        hasMore: !(action.payload.data.length < PAGES),
      };
    case TYPES.BLOCK_LIST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default block;
