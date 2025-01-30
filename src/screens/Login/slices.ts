import { createSlice } from '@reduxjs/toolkit';

import { PropsTypes } from './types';
import { thunkUpdateUser } from '../../redux/services';

const initialState: PropsTypes = {
  user: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(thunkUpdateUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const { setUser } = loginSlice.actions;
export default loginSlice.reducer;
