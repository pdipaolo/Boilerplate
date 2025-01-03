import { createSlice } from '@reduxjs/toolkit'
import { thunkFetchConfiguration } from './services';
import { Config } from './types';

const initialState = {
  config: null,
} satisfies Config as Config;

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    dismissAppUpdateModal: (state) => {
      state.config.app_update = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkFetchConfiguration.fulfilled, (state, { payload }) => {
      try {
        state.config = payload;
      } catch (error) {
      }
    });
  }
})
export const { dismissAppUpdateModal } = configSlice.actions;
export default configSlice.reducer;