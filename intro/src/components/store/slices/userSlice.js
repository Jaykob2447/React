import { createSlice } from "@reduxjs/toolkit";

export const USERS = {
  user1: {
    firstName: "Test",
    lastName: "Testovich",
    about: "about of user",
    isFavourite: false,
  },
  user2: {
    firstName: "Test2",
    lastName: "Testovich2",
    about: "about of user2",
    isFavourite: false,
  },
};

const SLICE_NAME = "favorite";

const initialState = {
  favorite: USERS.user1.isFavourite,
};

const isFavouriteSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    changeFavorite: (state, action) => {
      const { payload } = action;
      console.log(state.favorite, payload);
      state.favorite = !payload;
      //   console.log(state.favorite, payload);
    },
  },
});

const { reducer, actions } = isFavouriteSlice;

export const { changeFavorite } = actions;
export default reducer;
