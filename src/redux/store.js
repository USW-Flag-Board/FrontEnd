import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/toDos";
export default configureStore({
    reducer: {
        toDo: toDoReducer,
    },
})