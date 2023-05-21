import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpData: {
    joinType: "",
    loginId: "",
    major: "",
    name: "",
    nickname: "",
    password: "",
    studentId: "",
  },
};

const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.signUpData = action.payload;
    },
  },
});

export const postActions = boardSlice.actions;

export default boardSlice.reducer;
