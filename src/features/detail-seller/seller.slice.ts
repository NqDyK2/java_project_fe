import { createSlice } from "@reduxjs/toolkit"
import { apiGetAllProductsOfUser } from "./seller.action"

interface Data {
    loading: boolean
    result: object | null
    error: string | null
}
const initialState: Data = {
    loading: false,
    result: {},
    error: null,
}

const sellerSlice = createSlice({
    name: "seller",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiGetAllProductsOfUser.pending, (state) => {
            state.loading = true
        }).addCase(apiGetAllProductsOfUser.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
    }
})

export default sellerSlice.reducer