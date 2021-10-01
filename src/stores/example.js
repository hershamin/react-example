import { createSlice } from '@reduxjs/toolkit';
import { getTest } from '../api/example';

const initialState = {
  clicks: 0,
  getRequest: {
    error: '',
    userAgent: '',
  },
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: state => {
      state.clicks += 1;
    },
    getRequestStart: state => {
      state.getRequest.error = '';
      state.getRequest.userAgent = '';
    },
    getRequestSuccess: (state, action) => {
      state.getRequest.error = '';
      state.getRequest.userAgent = action.payload.userAgent;
    },
    getRequestError: (state, action) => {
      state.getRequest.error = action.payload.message;
      state.getRequest.userAgent = '';
    },
  }
});

// Advanced actions
export const httpGet = () => {
  return async (dispatch, getState) => {
    dispatch(getRequestStart());
    try {
      const res = await getTest();
      dispatch(getRequestSuccess(res));
    } catch (error) {
      dispatch(getRequestError(error));
    }
  };
};

export const {
  increment,
  getRequestStart,
  getRequestSuccess,
  getRequestError,
} = exampleSlice.actions;

export default exampleSlice.reducer;
