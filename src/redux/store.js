import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./counterSlice"

export default configureStore({
    reducer: {
        userName: nameReducer

    },
})