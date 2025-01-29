import { createSlice } from '@reduxjs/toolkit';

import { PropsTypes } from './types';

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
  extraReducers: (builder) => {},
});

export const { setUser } = loginSlice.actions;
export default loginSlice.reducer;
