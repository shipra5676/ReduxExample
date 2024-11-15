import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoCompleted } from '../store/actions/todoActions';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleTodoCompleted(id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleCompleted}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
    </li>
  );
};

export default TodoItem;
