import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
