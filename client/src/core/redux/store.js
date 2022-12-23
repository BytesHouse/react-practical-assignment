import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/postsSlice/postsSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsSlice,
  },
});

export const store = configureStore({
  reducer: {},
});
