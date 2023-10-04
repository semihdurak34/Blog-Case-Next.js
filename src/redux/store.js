import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";

export default configureStore({
  reducer: {
    blogSlice,
  },
});
