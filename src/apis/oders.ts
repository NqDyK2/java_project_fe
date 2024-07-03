import { AxiosRequestConfig } from "axios";
import { isAuthenticate } from "../utils/Authenticate";
import instance from "./instance";



export const createOrder = (infoOrder: any) => {
    const url = `/orders`;
    const test = isAuthenticate(); // Lấy token mỗi khi hàm này được gọi

    const axiosConfig: AxiosRequestConfig = {
        headers: {
            "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
        }
    };
    return instance.post(url, infoOrder, axiosConfig)
}

export const checkOrderOfUser = (userId: number, status?: number) => {
    const url = `/orders/user/${userId}?status=${status}`
    const test = isAuthenticate(); // Lấy token mỗi khi hàm này được gọi

    const axiosConfig: AxiosRequestConfig = {
        headers: {
            "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
        }
    };
    return instance.get(url, axiosConfig)
}

export const allOrder = (page?: any, size?: any) => {
    const url = `/orders?page=${page}&size=${size}`
    const test = isAuthenticate(); // Lấy token mỗi khi hàm này được gọi

    const axiosConfig: AxiosRequestConfig = {
        headers: {
            "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
        }
    };
    return instance.get(url, axiosConfig)
}

export const updateOrder = (idOrder: any, status: any) => {
    const url = `/orders/${idOrder}?status=${status}`
    const test = isAuthenticate(); // Lấy token mỗi khi hàm này được gọi
    const axiosConfig: AxiosRequestConfig = {
        headers: {
            "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
        }
    };
    return instance.patch(url, {}, axiosConfig)
}