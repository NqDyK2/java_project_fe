import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsOfUser } from "../../apis/manage-farm";

export const apiGetAllProductsOfUser = createAsyncThunk("GET_ALL_PRODUCTS_OF_USER", async (props: any) => {
    console.log("props:", props);
    try {
        const response: any = await getProductsOfUser(props.id, props.page, props.size);
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})