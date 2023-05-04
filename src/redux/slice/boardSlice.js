import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postId: 0,
  postData: {},
};

const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.postId = action.payload;
    },
    getPost: (state, action) => {
      state.postData = action.payload;
    },
  },
});

export const postActions = boardSlice.actions;

export default boardSlice.reducer;
