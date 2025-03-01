import { createSlice } from '@reduxjs/toolkit';

import { PropsTypes } from './types';

const initialState: PropsTypes = {
  hasError: false,
  errorType: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    presentError: (state, {payload}) => {
      state.errorType = payload;
      state.hasError = true;
    },
    dismissError: (state) => {
      state.hasError = false;
      state.errorType = null;
    },
  },
});

export const { presentError, dismissError } = errorSlice.actions;
export default errorSlice.reducer;
