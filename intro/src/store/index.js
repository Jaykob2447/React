import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/userSlice";
import todoReducer from "./slices/TodoSlice";

const store = configureStore({
  reducer: { favorite: favoriteReducer, todo: todoReducer },
});
export default store;
