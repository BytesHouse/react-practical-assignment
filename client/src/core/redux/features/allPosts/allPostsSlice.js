import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../../../api/fetchRequests/baseRequest";

const initialState = {
  results: [],
  isLoading: false,
};
export const getAllPosts = createAsyncThunk(
  "allPosts/getAllPosts",
  async () => {
    const results = await get("post");
    return results;
  }
);
export const searchPosts = createAsyncThunk(
  "allPosts/searchPosts",
  async (keyWord) => {
    const results = await get(`post/search/${keyWord}`);
    return results;
  }
);

const allPostsSlice = createSlice({
  name: "allPosts",
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
    builder.addCase(searchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchPosts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = [...payload.result];
    });
    builder.addCase(searchPosts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { deletePostFromState } = allPostsSlice.actions;
export default allPostsSlice.reducer;
