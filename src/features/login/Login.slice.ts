import { createSlice } from "@reduxjs/toolkit";
import { callApiLogin } from "./Login.action";

interface LoginAccountState {
    loading: boolean
    error: string | null;
    result: object | null;
}
const initialState: LoginAccountState = {
    loading: false,
    error: null,
    result: [],
}

const loginSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(callApiLogin.pending, (state) => {
            state.loading = true
        }).addCase(callApiLogin.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(callApiLogin.rejected, (state) => {

        })
    },
})

export default loginSlice.reducer