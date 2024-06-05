import { createSlice } from "@reduxjs/toolkit";
import { apiAddUser } from "./addUser.action";

interface AddUser {
    loading: boolean
    result: object | null;
    error: string | null
}

const initialState: AddUser = {
    loading: false,
    result: null,
    error: null
}

const addUserSlice = createSlice({
    name: "addUser",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiAddUser.pending, (state) => {
            state.loading = true
        }).addCase(apiAddUser.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiAddUser.rejected, (state) => {

        })
    },
})
export default addUserSlice.reducer
