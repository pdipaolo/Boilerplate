import { createSlice } from '@reduxjs/toolkit';

import { PropsTypes } from './types';

const initialState: PropsTypes = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    presentLoading: (state) => {
      state.isLoading = true;
    },
    dismissLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
  },
});

export const { presentLoading, dismissLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
