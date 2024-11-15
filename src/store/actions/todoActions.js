import { addTodo, toggleCompleted } from '../reducers/todoReducers';

export const addNewTodo = (text) => {
  return addTodo(text);
};

export const toggleTodoCompleted = (id) => {
  return toggleCompleted(id);
};
