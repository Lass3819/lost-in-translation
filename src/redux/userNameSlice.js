import { createSlice } from "@reduxjs/toolkit";


export const userNameSlice = createSlice({
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
export const { setName } = userNameSlice.actions;

export default userNameSlice.reducer;