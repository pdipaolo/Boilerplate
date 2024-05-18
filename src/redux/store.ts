import {configureStore} from '@reduxjs/toolkit';
import exampleSlice from '../screens/Example/slices';
import loadingSlice from '../components/Loader/slices';

const createStore = () => {
  const store = configureStore({
    reducer: {
      example: exampleSlice.reducer,
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
