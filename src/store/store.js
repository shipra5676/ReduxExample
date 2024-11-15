import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducers';
import apiReducer from './reducers/productListReducer';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    api:apiReducer
  },
});

export default store;
