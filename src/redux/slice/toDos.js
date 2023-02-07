import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    board: [],
    postId: 0,
};

const toDos = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        // 게시판 
        setBoard: (state, action) => {
            state.board = action.payload;
        },
        // 해당 게시글을 불러오기
        setId: (state, action) => {
            state.postId = action.payload;
        },
    },
});

export const postActions = toDos.actions;

export default toDos.reducer;