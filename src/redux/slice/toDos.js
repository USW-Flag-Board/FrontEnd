import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    getPostsData: [],
    setPostData: {
        boardId: 0,
        title: "",
        content: "",
        imgUrl: "",
        fileUrl: "",
        status: "NORMAL",
        userId: 3
    },
    postId: 0,
};

const toDos = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.getPostsData = action.payload;
        },
        setPost: (state, action) => {
            state.setPostData = action.payload;
        },
        setId: (state, action) => {
            state.postId = action.payload;
        },
    },
});

export const postActions = toDos.actions;

export default toDos.reducer;