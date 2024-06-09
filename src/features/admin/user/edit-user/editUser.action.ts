import { createAsyncThunk } from "@reduxjs/toolkit";
import { editUser, getUser } from "../../../../apis/manage-user";


export const apiGetUser = createAsyncThunk("GET_USER", async (id: any) => {
    try {
        const response = await getUser(id)
        return response.data
    } catch (error) {
        console.log("Err:", error);
    }
})

export const apiEditUser = createAsyncThunk("UPDATE_USER", async (infomation: any) => {
    try {
        const response = await editUser(infomation.id, infomation.data)
        return response.data
    } catch (error) {
        console.log("Err:", error);

    }
})