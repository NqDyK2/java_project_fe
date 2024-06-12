import { AxiosRequestConfig } from "axios";
import { CateType } from "../types/cate"
import instance from "./instance"
import { isAuthenticate } from "../utils/Authenticate";
import { ProductType } from "../types/products";

const test = isAuthenticate()

const axiosConfig: AxiosRequestConfig = {
    headers: {
        "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
    }
};

export const getAllCate = (userId: any) => {
    const url = `/categories/info/${userId}` 
    return instance.get(url)
}

export const getAll = () => {
    // const url = 
}

export const getAllProductById = () => {

}

export const getDetailProduct = () => {

}

export const addCate = (infoCate: CateType) => {
    const url = `/categories`;
    return instance.post(url, infoCate, axiosConfig)
}

export const addPrds = (infoPrds: ProductType) => {
    const url = `/products`;
    return instance.post(url, infoPrds, axiosConfig)
}

export const updateCate = () => {

}
