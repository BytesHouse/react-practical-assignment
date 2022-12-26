import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  get,
  post,
  put,
  remove,
} from "../../../../api/fetchRequests/baseRequest";
import { getUserFromLocalStorage } from "../../../lib/utils/localStorage";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  id: null,
  title: "",
  username: "",
  likes: [],
  dislikes: [],
  imageSrc: "",
  date: null,
  comments: [],
};

export const createPost = createAsyncThunk("post/createPost", async (body) => {
  const result = await post("post/", JSON.stringify(body));
  return result;
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  const result = await remove(`post/${id}`);
  return result;
});

export const addLike = createAsyncThunk("post/addLike", async (id) => {
  const result = await put(`post/${id}`, { likes: getUserFromLocalStorage() }); // to be continue
  return result;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success("Post has been created");
    });
    builder.addCase(createPost.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deletePost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.warning("Post has been deleted");
    });
    builder.addCase(deletePost.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default postSlice.reducer;
