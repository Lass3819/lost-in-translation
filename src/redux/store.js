import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./userNameSlice"
import inputReducer from "./translationInputSlice"

import usersReducer from "./usersSlice"
import translationReducer from "./translationSlice"

export default configureStore({
    reducer: {
        userName: nameReducer,
        input: inputReducer,
        users: usersReducer,
        translation: translationReducer,
    }
})