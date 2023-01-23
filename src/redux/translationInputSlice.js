import { createSlice } from "@reduxjs/toolkit";


export const translationInputSlice = createSlice({
    name: "input",
    initialState: {
        value: "",
    },
    reducers: {
        setInput: (state,action) => {
            state.value = action.payload;
        }
    }
})
export const { setInput } = translationInputSlice.actions;

export default translationInputSlice.reducer;