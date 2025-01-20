import { createSlice } from '@reduxjs/toolkit';

import { PropsTypes } from './types';

const initialState: PropsTypes = {
  isLoggedIn: true,
};

const loginSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
