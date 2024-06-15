import { createAsyncThunk } from "@reduxjs/toolkit";
import { CateType } from "../../types/cate";
import { addCate, addPrds, getAllCate, getAllProducts, getDetailCate, updateCate, } from "../../apis/manage-farm";
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

export const apiGetAllPrd = createAsyncThunk("GET_ALL_PRODUCTS", async (query: any) => {
    console.log("QUERY PAGE:", query.page);
    console.log("QUERY SIZE:", query.size);
    
    try {
        const response = await getAllProducts()
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

export const apiEditCategory = createAsyncThunk("EDIT_CATE", async (infomation: any) => {
    try {
        const response = await updateCate(infomation.id, infomation.data)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})