import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Todo: [
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

const TodoSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addTasks: (state, { payload }) => {
      state.Todo.push({
        id: payload.id,
        task: payload.task,
      });
    },
    removeTask: (state, { payload }) => {
      const foundTaskByIndex = state.Todo.findIndex((c) => c.id === payload);
      if (foundTaskByIndex !== -1) {
        state.Todo.splice(foundTaskByIndex, 1);
      }
    },
  },
});

const { reducer, actions } = TodoSlice;
export const { addTasks, removeTask } = actions;

export default reducer;
