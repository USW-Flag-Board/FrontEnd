import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    postId: 0,
};

const toDos = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload;
        },
        setId: (state, action) => {
            state.postId = action.payload;
        },
    },
});

export const postActions = toDos.actions;

export default toDos.reducer;