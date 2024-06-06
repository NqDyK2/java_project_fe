import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUser }  from "../../../../apis/manage-user";

export const getAllUsers = createAsyncThunk("GET_ALL_USER", async () => {
    try {
        const response: any = await getAllUser();
        return response.data
    } catch (error) {
        console.log("Error:", error);
    }
})