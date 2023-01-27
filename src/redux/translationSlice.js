import { createSlice } from "@reduxjs/toolkit";


export const translationForUserSlice = createSlice({
    name: "translations",
    initialState: {
        translations: JSON.parse(localStorage.getItem("translations")),
    },
    reducers: {
        setTranslations: (state, action) =>{
            state.translations = action.payload
        },
        addTranslation: (state, action) => {
            state.translations.push(action.payload)
        },
    },


})
export const { addTranslation, setTranslations} = translationForUserSlice.actions;

export default translationForUserSlice.reducer;