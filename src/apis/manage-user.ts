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
    const url = `/users?page=${page}&size=${7}`
    // const url = `/users`
    return instance.get(url, axiosConfig);
}

export const getAllUserPage = () => {
    const url = `/users`
    return instance.get(url, axiosConfig);
}