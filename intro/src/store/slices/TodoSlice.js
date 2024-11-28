import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 0,
      task: "Some task",
    },
    {
      id: 1,
      task: "Some task again",
    },
  ],
};

const SLICE_NAME = "Todo";

const todoSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addTasks: (state, { payload }) => {
      state.todos.push({
        id: payload.id,
        task: payload.task,
      });
    },
    removeTask: (state, { payload }) => {
      const foundTaskByIndex = state.todos.findIndex((c) => c.id === payload);
      if (foundTaskByIndex !== -1) {
        state.todos.splice(foundTaskByIndex, 1);
      }
    },
  },
});

const { reducer, actions } = todoSlice;
export const { addTasks, removeTask } = actions;

export default reducer;
