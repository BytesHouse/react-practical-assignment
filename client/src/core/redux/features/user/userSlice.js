import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
} from "../../../lib/utils/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.user = payload;
      addUserToLocalStorage(payload);
    },
    logOutUser: (state) => {
      deleteUserFromLocalStorage();
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
