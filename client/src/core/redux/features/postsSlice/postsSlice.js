import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../../../api/fetchRequests/baseRequest";

const initialState = {
  results: [],
  isLoading: false,
};
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const results = await get("post");
  return results;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = [...payload.result];
    });
    builder.addCase(getAllPosts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default postsSlice.reducer;
