// src/apiSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Create the slice
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    apiCallRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    apiCallSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.products;
    },
    apiCallFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { apiCallRequest, apiCallSuccess, apiCallFailure } = apiSlice.actions;

// Export reducer
export default apiSlice.reducer;
