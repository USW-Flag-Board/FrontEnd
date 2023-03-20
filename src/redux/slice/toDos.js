import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    getPostsData: [],
    getPostData: {},
    getUserData: {},
    boardName: "free_board",
    postId: 0,
};

const toDos = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.getPostsData = action.payload;
        },
        getPost: (state, action) => {
            state.getPostData = action.payload;
        },
        getBoard: (state, action) => {
            state.boardName = action.payload;
        },
        getUser: (state, action) => {
            state.getUserData = action.payload;
        },
        // 해당 게시글을 불러오기
        setId: (state, action) => {
            state.postId = action.payload;
        },
    },
});

export const postActions = toDos.actions;

export default toDos.reducer;