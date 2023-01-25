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
        name: JSON.parse(localStorage.getItem("userName")),
        users: [],
        loading: true,
        error: null
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        }
    },
    extraReducers: {
        [addUserAsync.fulfilled]: (state,action) => {
            state.users.push(action.payload.user)
            state.loading = false;
        },
        [addUserAsync.pending]: (state, action) =>{
            state.loading = true;
        },
        [addUserAsync.rejected]: (state,action)=>{
            state.error = action.error
            state.loadingTranslations = false
        }

    },
})
export const { setName } = userNameSlice.actions;

export default userNameSlice.reducer;