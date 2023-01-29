import { createSlice } from "@reduxjs/toolkit";

export const toDos = createSlice({
    name: 'toDoReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.concat(action.todo)
        },
        // remove: (state, action) => {
        //     state.filter()
        // },
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