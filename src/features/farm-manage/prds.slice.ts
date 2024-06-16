import { createSlice } from "@reduxjs/toolkit"
import { apiAddCate, apiAddPrds, apiGetAllPrd, apiGetDetailProductById } from "./manage-farm.action"

interface Products {
    loading: boolean
    result: object | null
    error: string | null
}

const initialState: Products = {
    loading: false,
    result: {},
    error: null,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiAddPrds.pending, (state) => {
            state.loading = true
        }).addCase(apiAddPrds.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiAddPrds.rejected, (state) => {

        }).addCase(apiGetAllPrd.pending, (state) => {
            state.loading = true
        }).addCase(apiGetAllPrd.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiGetDetailProductById.pending, (state) => {
            state.loading = true
        }).addCase(apiGetDetailProductById.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
    },
})

export default productSlice.reducer