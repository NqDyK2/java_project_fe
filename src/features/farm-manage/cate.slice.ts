import { createSlice } from "@reduxjs/toolkit"
import { apiAddCate, apiGetAllCate, getDetailCateById } from "./manage-farm.action"

interface Category {
    loading: boolean
    result: object | null
    error: string | null
}

const initialState: Category = {
    loading: false,
    result: {},
    error: null,
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiAddCate.pending, (state) => {
            state.loading = true
        }).addCase(apiAddCate.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(apiGetAllCate.pending, (state) => {
            state.loading = true
        }).addCase(apiGetAllCate.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        }).addCase(getDetailCateById.pending, (state) => {
            state.loading = true
        }).addCase(getDetailCateById.fulfilled, (state, action) => {
            state.loading = false
            state.result = action.payload
        })
    },
})

export default categorySlice.reducer