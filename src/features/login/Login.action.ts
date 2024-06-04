import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../apis/user";
import { UserType } from "../../types/users";

export const callApiLogin = createAsyncThunk("LOGIN", async (infomation: UserType) => {
    try {
        const response = await login(infomation)
        return response.data
    } catch (error) {
        console.log("Err:", error);
    }
})