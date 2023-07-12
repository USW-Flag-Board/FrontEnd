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

const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.signUpData = { ...state.signUpData, ...action.payload };
    },
  },
});

export const { setUserData } = signUpSlice.actions;

export default signUpSlice.reducer;
