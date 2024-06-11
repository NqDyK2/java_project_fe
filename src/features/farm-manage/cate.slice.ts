import { createSlice } from "@reduxjs/toolkit"
import { apiAddCate } from "./cate.action"

interface AddCategory {
    loading: boolean
    result: object | null
    error: string | null
}

const initialState: AddCategory = {
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
        }).addCase(apiAddCate.rejected, (state) => {

        })
    },
})

export default categorySlice.reducer