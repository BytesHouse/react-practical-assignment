import { configureStore } from "@reduxjs/toolkit";
import allPostsSlice from "./features/allPosts/allPostsSlice";
import postSlice from "./features/post/postSlice";
import userSlice from "./features/user/userSlice";
import popupSlice from "./features/popup/popupSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    allPosts: allPostsSlice,
    post: postSlice,
    popup: popupSlice,
  },
});
