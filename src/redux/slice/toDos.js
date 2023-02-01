import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    gets: [],
};

const toDos = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload;
        },
        getPost: (state, action) => {
            state.gets = action.payload;
        },
    },
});

export const postActions = toDos.actions;

export default toDos.reducer;