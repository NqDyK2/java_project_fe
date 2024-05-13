import { AccountType } from '../types/account';
// import { UserType } from "../types/users";
// export const authenticated = (user: UserType, next: () => void) => {
//     localStorage.setItem('user', JSON.stringify(user));
//     next();
// }
// export const isAuthenticate = () => {
//     if (!localStorage.getItem('user')) return;
//     return JSON.parse(localStorage.getItem('user') as string)
// }

export const authenticated = (account: AccountType, next: () => void) => {
    localStorage.setItem('account', JSON.stringify(account));
    next();
}

export const isAuthenticate = () => {
    if (!localStorage.getItem('account')) return;
    return JSON.parse(localStorage.getItem('account') as string)
}