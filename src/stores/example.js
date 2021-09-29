import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clicks: 0,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.clicks += 1;
    },
  }
});

export const {
  increment
} = exampleSlice.actions;

export default exampleSlice.reducer;
