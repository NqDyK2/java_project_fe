import { createAsyncThunk } from "@reduxjs/toolkit";
import { allOrder, checkOrderOfUser, createOrder } from "../../apis/oders";
import { OrderType } from "../../types/order";

export const apiCreateOrder = createAsyncThunk("CREATE_ORDER", async (infoOrder: OrderType) => {
    try {
        const response = await createOrder(infoOrder)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiGetOrderByUser = createAsyncThunk("GET_ORDER_OF_USER", async (params: any) => {
    try {
        const response = await checkOrderOfUser(params.userId, params.status)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})

export const apiGetAllOrder = createAsyncThunk("GET_ALL_ORDERS", async (params: any) => {
    try {
        const response = await allOrder(params.page, params.size)
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})