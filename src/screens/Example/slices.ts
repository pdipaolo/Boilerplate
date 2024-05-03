import {createSlice} from '@reduxjs/toolkit';

const initialState: {value: boolean} = {
  value: false,
};

const exampleSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    showAppUpdateAlert(state) {
      state.value = true;
    },
    dismissAppUpdateAlert(state) {
      state.value = false;
    },
  },
});

export default exampleSlice;
