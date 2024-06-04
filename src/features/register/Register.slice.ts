import { createSlice } from "@reduxjs/toolkit";
import { callApiRegister } from "./Register.action";

interface RegisterAccountState {
    loading: boolean
    error: string | null;
    result: object | null;
}
const initialState:RegisterAccountState = {
    loading: false,
    error: null,
    result: null,
}

const regisSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(callApiRegister.pending, (state) => {
            state.loading = true
        }).addCase(callApiRegister.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(callApiRegister.rejected, (state) => {

        })
    },
})

export default regisSlice.reducer