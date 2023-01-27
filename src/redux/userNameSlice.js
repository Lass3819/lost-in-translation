import { createSlice } from "@reduxjs/toolkit";


export const userNameSlice = createSlice({
    name: "userName",
    initialState: {
        name: JSON.parse(localStorage.getItem("userName")),
        index: JSON.parse(localStorage.getItem("index")),
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setIndex: (state, action) =>{
            state.index = action.payload;
        }
    },


})
export const { setName, setIndex } = userNameSlice.actions;

export default userNameSlice.reducer;