import { createSlice } from "@reduxjs/toolkit"
import { apiGetAllOrder, apiUpdateStatusOrder } from "./oderAdmin.action"

interface Slice {
    loading: boolean
    result: any
    error: string | null
}

const initialState: Slice = {
    loading: false,
    result: {},
    error: null
}

const orderAdminSlice = createSlice({
    name: "orderAdmin",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiGetAllOrder.pending, (state) => {
            state.loading = true
        }).addCase(apiGetAllOrder.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiUpdateStatusOrder.pending, (state) => {
            state.loading = true
        }).addCase(apiUpdateStatusOrder.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
    },
})

export default orderAdminSlice.reducer