import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    getUserData: {},
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.getUserData = action.payload;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;