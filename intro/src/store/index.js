import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/userSlice";
import todoReducer from "./slices/todoSlice";

const store = configureStore({
  reducer: { favorite: favoriteReducer, todo: todoReducer },
});
export default store;
