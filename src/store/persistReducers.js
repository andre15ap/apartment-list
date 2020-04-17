import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reduces) => {
  const persistedReducer = persistReducer(
    {
      key: 'kiper-front',
      storage,
      whitelist: ['auth', 'user'],
    },
    reduces
  );

  return persistedReducer;
};
