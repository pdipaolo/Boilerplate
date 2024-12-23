import { createSlice } from '@reduxjs/toolkit'
import { thunkFetchConfiguration } from './services';

interface Config {
  config: {
    id: number
  };
}

const initialState = {
  config: null
} satisfies Config as Config;

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {

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
export default configSlice.reducer;