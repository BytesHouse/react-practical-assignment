import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
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
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
