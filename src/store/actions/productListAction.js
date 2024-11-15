// src/apiActions.js

import { apiCallRequest, apiCallSuccess, apiCallFailure } from '../reducers/productListReducer';

export const fetchData = (url) => async (dispatch) => {
  dispatch(apiCallRequest());

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    dispatch(apiCallSuccess(data)); // Dispatch the success action with data
  } catch (error) {
    dispatch(apiCallFailure(error.message)); // Dispatch the failure action with error
  }
};
