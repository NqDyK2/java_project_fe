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

export const getAllProducts = (page?: any, size?: any) => {
    let url:string;
    // Nếu có cả 2 => ghép cả 2
    // Nếu có page mà không có size =>
    // Nếu không có page mà có size =>
    // Nếu không có cả 2 =>
    console.log("TYPE PAGE?:", typeof page);
    if (page) {
        url = `/products/info?page=${page}&size=4`
    } else {
        url = `/products/info?size=4`
    }
    return instance.get(url, axiosConfig)
}

export const getDetailCate = (idCate: any) => {
    const url = `/categories/info/cate/${idCate}`
    return instance.get(url)
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

export const updateCate = (id: any, infomation: any) => {
    const url = `/categories/${id}`;
    return instance.patch(url, infomation, axiosConfig)
}
