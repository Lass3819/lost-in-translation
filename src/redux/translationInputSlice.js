import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiURL, apiKey } from "../constants";
export const postNewTranslationAsync = createAsyncThunk(
    "translation/postTranslationAsync",
    async (payload) => {fetch(`${apiURL}/translations`, {
            method: 'PATCH', 
            headers: {
                'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                translations: payload
            })
          })
    }
)



const translationInputSlice = createSlice({
    name: "input",
    initialState: {
        value: "",
    },
    reducers: {
        setInput: (state,action) => {
            state.value = action.payload;
        }
    },
})
export const { setInput } = translationInputSlice.actions;

export default translationInputSlice.reducer;