import { createAsyncThunk } from "@reduxjs/toolkit";
import { CateType } from "../../types/cate";
import { addCate, addPrds, getAllCate } from "../../apis/manage-farm";
import { ProductType } from "../../types/products";

export const apiAddCate = createAsyncThunk("ADD_CATE", async (data: CateType) => {
    try {
        const response = await addCate(data)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiGetAllCate = createAsyncThunk("GET_ALLS_CATE", async (id: number) => {
    try {
        const response = await getAllCate(id)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiAddPrds = createAsyncThunk("ADD_PRDS", async (data: ProductType) => {
    try {
        const response = await addPrds(data)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})