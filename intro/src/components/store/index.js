import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/userSlice";
import todo from "./slices/TodoSlice";

const store = configureStore({
  reducer: { favorite: favoriteReducer, Todo: todo },
});
export default store;
