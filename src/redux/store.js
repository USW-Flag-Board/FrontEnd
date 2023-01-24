import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/counterSlice";
export default configureStore({
    reducer: {
        toDo: toDoReducer,
    },
})