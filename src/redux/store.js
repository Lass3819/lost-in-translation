import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./userNameSlice"
import inputReducer from "./translationInputSlice"

export default configureStore({
    reducer: {
        userName: nameReducer,
        input: inputReducer,

    }
})