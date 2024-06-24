import { createSlice } from "@reduxjs/toolkit"
import { apiAddCate, apiAddPrds, apiEditProduct, apiGetAllPrd, apiGetDetailProductById, apiSearchProducts } from "./manage-farm.action"

interface Search {
    loading: boolean
    result: object | null
    error: string | null
    searchTerm: string | null
}

const initialState: Search = {
    loading: false,
    result: [],
    error: null,
    searchTerm: '',
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(apiSearchProducts.pending, (state) => {
            state.loading = true
        }).addCase(apiSearchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
    },
})
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer