import {configureStore} from '@reduxjs/toolkit';
import exampleSlice from '../screens/Example/slices';

const createStore = () => {
  const store = configureStore({
    reducer: {
      example: exampleSlice.reducer,
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
