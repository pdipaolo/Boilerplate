import {configureStore} from '@reduxjs/toolkit';
import loadingSlice from '../components/Loader/slices';
import loginSlice from '../screens/Login/slices';

const createStore = () => {
  const store = configureStore({
    reducer: {
      login: loginSlice,
      loading: loadingSlice,
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
