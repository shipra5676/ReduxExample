import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'Learn Redux Toolkit', completed: false },
  { id: 2, text: 'Build Todo List App', completed: false },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: state.length + 1, text: action.payload, completed: false });
    },
    toggleCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleCompleted } = todoSlice.actions;
