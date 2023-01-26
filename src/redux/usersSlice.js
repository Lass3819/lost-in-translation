import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiKey, apiURL } from "../constants";

export const getUsersAsync = createAsyncThunk(
    "users/fetchUsers",
    async ()=>{
        const resp = await fetch(apiURL)

        if(!resp.ok){
            return new Promise.reject();
        }
        const users = await resp.json();
        return { users }
    }
)
export const addUserAsync = createAsyncThunk(
    "user/addUser",
    async (name) => {
        const resp = await fetch(apiURL,{
            method: "POST",
            headers:{
                "X-API-Key": apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: name,
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

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loadingUsers: false,
        error: null
    },
    reducers:{
    },
    extraReducers:{
        [getUsersAsync.pending]: (state, action) => {
            state.loadingUsers = true
        },
        [getUsersAsync.fulfilled]: (state, action) => {
            state.users = action.payload.users
            state.loadingUsers = false
        },
        [getUsersAsync.rejected]: (state, action) => {
            state.error = action.error
            state.loadingUsers = false
        },
        [addUserAsync.fulfilled]: (state, action) => {
            state.users.push(action.payload.user)
        } 
    }
    
})
export default usersSlice.reducer;