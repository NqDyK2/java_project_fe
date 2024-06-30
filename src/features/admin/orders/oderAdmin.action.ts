import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderType } from "../../../types/order";
import { allOrder, updateOrder } from "../../../apis/oders";


export const apiGetAllOrder = createAsyncThunk("GET_ALL_ORDERS", async (params: any) => {
    try {
        const response = await allOrder(params.page, params.size)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiUpdateStatusOrder = createAsyncThunk("UPDATE_ORDER", async (params: any) => {
    try {
        const response = await updateOrder(params.idOrder, params.status)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})