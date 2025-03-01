import {configureStore} from '@reduxjs/toolkit';

import loadingSlice from '../components/Loader/slices';
import errorSlice from '../components/ErrorBoundary/slices';
import loginSlice from '../screens/Login/slices';
import snackbarSlice from '../components/Snackbar/slices';
import { api } from './services';
import configSlice  from './slices';

const createStore = () => {
  const store = configureStore({
    reducer: {
      login: loginSlice,
      loading: loadingSlice,
      error: errorSlice,
      snackbar: snackbarSlice,
      config: configSlice,
      [api.reducerPath]: api.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
  });

  return store;
};

const store = createStore();

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export {store};
export {type RootState, type AppDispatch};
