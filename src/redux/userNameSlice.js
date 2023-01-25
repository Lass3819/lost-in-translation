import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiURL, apiKey } from "../constants";

export const getUserAsync = createAsyncThunk(
    "user/getUsers",
    async () => {
        const resp = await fetch(apiURL);

        if (!resp.ok){
            return new Promise.reject();
        }

        const users = await resp.json()
        return { users }

    }
)

export const addUserAsync = createAsyncThunk(
    "user/addUser",
    async (payload) => {
        const resp = await fetch(apiURL,{
            method: "POST",
            headers:{
                "X-API-Key": apiKey,
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                username: payload.name,
                translations: []
            })
        })
        if (!resp.ok){
            return new Promise.reject();
            
        }
        const user = await resp.json();
        return { user }

        }

)



export const userNameSlice = createSlice({
    name: "userName",
    initialState: {
        value: JSON.parse(localStorage.getItem("userName")),
    },
    reducers: {
        setName: (state, action) => {
            state.value = action.payload;
        }
    },
    extraReducers: {
        [addUserAsync.fulfilled]: (state,action) => {
            state.users = action.payload.user
        }
    },
})
export const { setName } = userNameSlice.actions;

export default userNameSlice.reducer;