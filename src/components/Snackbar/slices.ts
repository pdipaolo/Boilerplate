import { createSlice } from '@reduxjs/toolkit';

import { PropsTypes } from './types';

const initialState: PropsTypes = {
  isVisible: false,
  snackbarType: null,
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    presentSnackbar: (state, {payload}) => {
      state.snackbarType = payload;
      state.isVisible = true;
    },
    dismissSnackbar: (state) => {
      state.isVisible = false;
      state.snackbarType = null;
    },
  },
});

export const { presentSnackbar, dismissSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
