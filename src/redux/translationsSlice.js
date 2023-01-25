import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiURL } from "../constants";
export const getTranslationsAsync = createAsyncThunk(
    "translation/getTranslationsAsync",
    async () => {
        const resp = await fetch(apiURL)
        
        if(!resp.ok){
            return new Promise.reject();
        }
        
        
        const translations = await resp.json();
        return { translations };

        
        
    }


)


const translationSlice = createSlice({
    name: "translation",
    initialState: {
        translations: [],
        loadingTranslations: true,
        error: null
    },
    reducers: {
    },
    extraReducers: {
        [getTranslationsAsync.pending]: (state,action)=>{
            state.loadingTranslations = true
        },
        [getTranslationsAsync.fulfilled]: (state,action)=>{
            state.translations = action.payload.translations
            state.loadingTranslations = false
            
        },
        [getTranslationsAsync.rejected]: (state,action)=>{
            state.error = action.error
            state.loadingTranslations = false
        }
    }
})
//export const { } = translationSlice.actions;

export default translationSlice.reducer;