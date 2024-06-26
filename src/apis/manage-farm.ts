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

export const getAllCate = (userId: any, page?: any, size?: any) => {
    let url: any;
    if (page && size) {
        url = `/categories/info/${userId}?page=${page}&size=${size}`
    } else {
        url = `/categories/info/${userId}`
    }
    return instance.get(url)
}

export const getAllProducts = (page?: any, size?: any, sortBy?: any, orderBy?: any, minPrice?: any, maxPrice?: any) => {
    let url: string;
    if (!orderBy || !sortBy) {
        url = `/products/info?page=${page}&size=${size}&min=${minPrice}&max=${maxPrice}`
    } else {
        url = `/products/info?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&min=${minPrice}&max=${maxPrice}`
    }
    return instance.get(url, axiosConfig)
}

export const getDetailCate = (idCate: any) => {
    const url = `/categories/info/cate/${idCate}`
    return instance.get(url)
}

export const getAllProductByUserId = (idUser: any) => {
    const url = `/products/user/${idUser}`
    return instance.get(url)
}

export const getDetailProduct = (productId: any) => {
    const url = `/products/info/${productId}`
    return instance.get(url)
}

export const addCate = (infoCate: CateType) => {
    const url = `/categories`;
    return instance.post(url, infoCate, axiosConfig)
}

export const addPrds = (infoPrds: ProductType) => {
    const test = isAuthenticate(); // Lấy token mỗi khi hàm này được gọi

    const axiosConfig: AxiosRequestConfig = {
        headers: {
            "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
        }
    };
    const url = `/products`;
    return instance.post(url, infoPrds, axiosConfig)
}

export const updateCate = (id: any, infomation: any) => {
    const url = `/categories/${id}`;
    return instance.patch(url, infomation, axiosConfig)
}

export const getProductsOfUser = (idUser: number, page?: number, size?: number) => {
    console.log("idUser:", idUser);

    let url: string;
    if (page && size) {
        url = `/products/user/${idUser}?page=${page}&size=${size}`
    } else {
        url = `/products/user/${idUser}`
    }
    return instance.get(url)
}

export const updateProduct = (id: any, infomation: any) => {
    const url = `/products/${id}`;
    return instance.patch(url, infomation, axiosConfig)
}

export const searchProduct = (keyWord: any) => {
    const url = `/products/find?q=${keyWord}`
    return instance.get(url)
}