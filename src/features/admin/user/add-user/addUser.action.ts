import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../../../types/users";
import { addMore } from "../../../../apis/manage-user";

export const apiAddUser = createAsyncThunk("ADD_USER", async (infomation: UserType) => {
    try {
        const response = await addMore(infomation)
        return response.data
    } catch (error) {
        console.log("Err:", error);
    }
})