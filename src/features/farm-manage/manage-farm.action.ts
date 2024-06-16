import { createAsyncThunk } from "@reduxjs/toolkit";
import { CateType } from "../../types/cate";
import { addCate, addPrds, getAllCate, getAllProducts, getDetailCate, updateCate, getDetailProduct } from "../../apis/manage-farm";
import { ProductType } from "../../types/products";

export const apiAddCate = createAsyncThunk("ADD_CATE", async (data: CateType) => {
    try {
        const response = await addCate(data)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiGetAllCate = createAsyncThunk("GET_ALLS_CATE", async (data: any) => {
    try {
        const response = await getAllCate(data.id, data.page, data.size)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiGetAllPrd = createAsyncThunk("GET_ALL_PRODUCTS", async (query: any) => {
    try {
        const response = await getAllProducts(query.page, query.size)
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

export const getDetailCateById = createAsyncThunk("GET_DETAIL_CATE", async (idCate: any) => {
    try {
        const response = await getDetailCate(idCate)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiGetDetailProductById = createAsyncThunk("GET_DETAIL_PRODUCT", async (idPrd: any) => {
    try {
        const response = await getDetailProduct(idPrd)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiEditCategory = createAsyncThunk("EDIT_CATE", async (infomation: any) => {
    try {
        const response = await updateCate(infomation.id, infomation.data)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})