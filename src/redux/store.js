import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./userNameSlice"
import inputReducer from "./translationInputSlice"
import translationsReducer from "./translationsSlice"
import usersReducer from "./usersSlice"

export default configureStore({
    reducer: {
        userName: nameReducer,
        input: inputReducer,
        translations: translationsReducer,
        users: usersReducer,


    }
})