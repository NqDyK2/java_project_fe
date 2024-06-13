import { createAsyncThunk } from "@reduxjs/toolkit";
import { regis } from "../../apis/user";
import { UserType } from "../../types/users";

export const callApiRegister = createAsyncThunk("REGISTER", async (infomation: UserType) => {
    try {
        const response = await regis(infomation)
        return response.data
    } catch (error) {
        console.log("Err:", error);
    }
})