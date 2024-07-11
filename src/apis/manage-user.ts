import { AxiosRequestConfig } from 'axios';
import { UserType } from '../types/users';
import { isAuthenticate } from '../utils/Authenticate';
import instance from './instance';

const test = isAuthenticate()

const axiosConfig: AxiosRequestConfig = {
    headers: {
        "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
    }
};

export const addMore = (user: UserType) => {
    const url = `/users`;
    return instance.post(url, user, axiosConfig);
}

export const getAllUser = (page?: any) => {
    const test = isAuthenticate(); // Lấy token mỗi khi hàm này được gọi

    const axiosConfig: AxiosRequestConfig = {
        headers: {
            "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
        }
    };
    const url = `/users?page=${page}&size=${6}`
    // const url = `/users`
    return instance.get(url, axiosConfig);
}

export const getAllUserPage = () => {
    const url = `/users`
    return instance.get(url, axiosConfig);
}

export const getUser = (id: any) => {
    const url = `/users/info/${id}`
    return instance.get(url, axiosConfig);
}

export const editUser = (id: any, infomation: any) => {
    const url = `/users/${id}`
    const test = isAuthenticate()

    const axiosConfig: AxiosRequestConfig = {
        headers: {
            "utcJava": `${test?.token}` // Sử dụng Bearer authentication token ở đây
        }
    };
    return instance.patch(url, infomation, axiosConfig);
}