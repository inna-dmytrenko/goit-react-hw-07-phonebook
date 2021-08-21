import { configureStore } from '@reduxjs/toolkit';

import { phoneBookApi } from '../phoneBook-api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { filterReducer } from '../filterReducer';
export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phoneBookApi.middleware,
  ],
});
setupListeners(store.dispatch);
