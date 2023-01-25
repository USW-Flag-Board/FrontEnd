import { createSlice } from "@reduxjs/toolkit";

export const toDos = createSlice({
    name: 'toDoReducer',
    initialState: {
        arr: [],
        value: 0,
    },
    reducers: {
        add: (state, action) => {
            state.arr.concat({text: action.payload})
        },
        remove: (state, action) => {
            state.filter()
        },
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
});

export const { increment, decrement, add, remove } = toDos.actions;

export default toDos.reducer;