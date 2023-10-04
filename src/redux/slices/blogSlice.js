import { createSlice } from "@reduxjs/toolkit";
import {
  createBlog,
  deleteBlog,
  fetchBlogs,
  updateBlog,
} from "./../actions/blogActions";

const initialState = {
  blogs: [],
  isLoading: true,
  isError: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(fetchBlogs.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });

    builder.addCase(createBlog.fulfilled, (state, action) => {
      console.log(action);
      state.blogs.unshift(action.payload);
    });

    builder.addCase(updateBlog.fulfilled, (state, action) => {
      const foundIndex = state.blogs.findIndex(
        (i) => i.id === action.payload.id
      );

      state.blogs.splice(foundIndex, 1, action.payload);
    });

    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.blogs = state.blogs.filter((i) => i.id !== action.payload);
    });
  },
});

export default blogSlice.reducer;
