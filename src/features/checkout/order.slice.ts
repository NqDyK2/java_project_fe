import { createSlice } from "@reduxjs/toolkit"
import { apiCreateOrder, apiGetAllOrder, apiGetOrderByUser } from "./oder.action"
import { OrderType } from "../../types/order"

interface Slice {
    loading: boolean
    result: OrderType[]
    error: string | null
}

const initialState: Slice = {
    loading: false,
    result: [],
    error: null
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiCreateOrder.pending, (state) => {
            state.loading = true
        }).addCase(apiCreateOrder.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiGetOrderByUser.pending, (state) => {
            state.loading = true
        }).addCase(apiGetOrderByUser.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiGetAllOrder.pending, (state) => {
            state.loading = true
        }).addCase(apiGetAllOrder.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
    },
})

export default orderSlice.reducer