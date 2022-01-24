import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todo_list: [],
    child: ''
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo: (state, action) => {
        state.todo_list.push(action.payload)
      },
      setCheck: (state, action) => {
        state.todo_list.forEach(todo => todo.id === action.payload ? todo.done = !todo.done : '');
      },
      removeTodos: (state) => {
        state.todo_list = state.todo_list.filter(todo => !todo.done);
      },
      renderChild: (state, action) => {
        state.child = action.payload;
      }
  },
});

export const {saveTodo, setCheck, removeTodos, renderChild} = todoSlice.actions;

export const selectTodoList = state => state.todos.todo_list;
export const selectChild = state => state.todos.child;

export default todoSlice.reducer;

