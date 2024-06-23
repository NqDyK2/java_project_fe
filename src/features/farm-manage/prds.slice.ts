import { createSlice } from "@reduxjs/toolkit"
import { apiAddCate, apiAddPrds, apiEditProduct, apiGetAllPrd, apiGetDetailProductById, apiSearchProducts } from "./manage-farm.action"

interface Products {
    loading: boolean
    result: object | null
    error: string | null
    searchTerm: string | null
}

const initialState: Products = {
    loading: false,
    result: {},
    error: null,
    searchTerm: '',
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
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
        }).addCase(apiEditProduct.pending, (state) => {
            state.loading = true
        }).addCase(apiEditProduct.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiSearchProducts.pending, (state) => {
            state.loading = true
        }).addCase(apiSearchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
    },
})
export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer