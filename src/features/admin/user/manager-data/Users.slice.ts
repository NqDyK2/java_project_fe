import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./Users.action";
// import { apiAddUser } from "./addUser.action";

interface allUsers {
    loading: boolean
    result: object | null;
    error: string | null
}

const initialState: allUsers = {
    loading: false,
    result: null,
    error: null
}

const allUsersSlice = createSlice({
    name: "allUsers",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllUsers.pending, (state) => {
            state.loading = true
        }).addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(getAllUsers.rejected, (state) => {

        })
    },
})
export default allUsersSlice.reducer
