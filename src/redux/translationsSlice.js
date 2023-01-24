import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTranslationsAsync = createAsyncThunk(
    "translations/getTranslationsAsync",
    async ()=>{
        const resp = await fetch('https://noroff-api-production-f6a1.up.railway.app/translations')
        if (resp.ok){
            const translations = await resp.json();
            return { translations};

        }
        
    }


)


export const translationSlice = createSlice({
    name: "translations",
    initialState: {
        value: [],
    },
    reducers: {
    },
    extraReducers: {
        [getTranslationsAsync.fulfilled]: (state,action)=>{
            return action.payload.translations
        }
    }
})
//export const { setInput } = translationSlice.actions;

export default translationSlice.reducer;