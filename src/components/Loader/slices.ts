import { createSlice } from '@reduxjs/toolkit';

import { PropsTypes } from './types';
import { thunkCreateAccount, thunkLogin } from '../../screens/Login/services';

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
    builder.addCase(thunkLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(thunkLogin.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(thunkLogin.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(thunkCreateAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(thunkCreateAccount.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(thunkCreateAccount.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { presentLoading, dismissLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
