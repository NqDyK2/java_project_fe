import { UserType } from '../types/users';
import instance from './instance';


export const addMore = (user: UserType) => {
    const url = `/users`;
    return instance.post(url, user);
}
