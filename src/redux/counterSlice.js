import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "userName",
    initialState: {
        value: "",
    },
    reducers: {
        setName: (state,action) => {
            state.value = action.payload;
        }
    }
})
export const { setName } = counterSlice.actions;

export default counterSlice.reducer;