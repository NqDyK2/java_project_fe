import { createSlice } from "@reduxjs/toolkit";
import { callApiRegister } from "./Register.action";

const initialState = {
    loading: false,
    result: [] as string[],
    error: {},
}

const regisSlice = createSlice({
    name: "register",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(callApiRegister.pending, (state) => {
            // state.newAccount.loading = true
        }).addCase(callApiRegister.fulfilled, (state, action) => {
            // state.newAccount.loading = false
            // state.newAccount.result = action.payload
        }).addCase(callApiRegister.rejected, (state) => {

        })
    },
})