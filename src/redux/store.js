import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./userNameSlice"
import inputReducer from "./translationInputSlice"
import translationsReducer from "./translationsSlice"

export default configureStore({
    reducer: {
        userName: nameReducer,
        input: inputReducer,
        translations: translationsReducer


    }
})