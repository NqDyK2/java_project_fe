import { UserType } from '../types/users';
import instance from './instance';


export const regis = (user: UserType) => {
    const url = `/auth/signup`;
    return instance.post(url, user);
}
export const login = (user: UserType) => {
    const url = `/auth/signin`;
    return instance.post(url, user)
}
export const logout = () => {
    const url = `/auth/signout`;
    return instance.post(url)
}
