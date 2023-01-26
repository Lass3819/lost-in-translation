import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiURL, apiKey } from "../constants";

export const postNewTranslationAsync = createAsyncThunk(
    "translation/postTranslationAsync",
    async (payload) => {
        const resp = await fetch(`${apiURL}/${payload.index}`, {
            method: 'PATCH', 
            headers: {
                'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                translations:  payload.arr
            })
          })
          if(!resp.ok){
            return new Promise.reject();
          }
          const translation = await resp.json();
          return { translation }

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