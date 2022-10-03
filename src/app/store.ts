import { configureStore } from '@reduxjs/toolkit';

//Import all slices
import counterReducer from '../features/somefeature/somefeature-slice';

//Import all api slices
import { apiSlice } from '../features/someotherfeature/someotherfeature-api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;