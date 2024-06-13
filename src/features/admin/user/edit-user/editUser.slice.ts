import { createSlice } from "@reduxjs/toolkit";
import { apiGetUser, apiEditUser } from "./editUser.action";

interface EditUser {
    loading: boolean
    result: object | null;
    error: string | null
}

const initialState: EditUser = {
    loading: false,
    result: {},
    error: null
}

const editUserSlice = createSlice({
    name: "editUser",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiGetUser.pending, (state) => {
            state.loading = true
        }).addCase(apiGetUser.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiGetUser.rejected, (state) => {

        }).addCase(apiEditUser.pending, (state) => {
            state.loading = true
        }).addCase(apiEditUser.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
    }
})

export default editUserSlice.reducer