import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/userSlice";

const store = configureStore({ reducer: { favorite: favoriteReducer } });
export default store;
