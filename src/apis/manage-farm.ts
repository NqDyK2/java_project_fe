import { AxiosRequestConfig } from "axios";
import { CateType } from "../types/cate"
import instance from "./instance"
import { isAuthenticate } from "../utils/Authenticate";

const test = isAuthenticate()

const axiosConfig: AxiosRequestConfig = {
    headers: {
        "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
    }
};

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

export const addPrds = () => {

}

export const updateCate = () => {

}
