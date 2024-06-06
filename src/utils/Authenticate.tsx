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

export const authenticated = (account: AccountType, token: string, next: () => void) => {
    localStorage.setItem('account', JSON.stringify(account));
    localStorage.setItem('token', token);
    next();
}

export const isAuthenticate = () => {
    const accountJSON = localStorage.getItem('account');
    const token = localStorage.getItem("token");

    // Kiểm tra nếu cả account và token đều tồn tại trong localStorage
    if (accountJSON && token) {
        const account: AccountType = JSON.parse(accountJSON);
        return { account, token }; // Trả về một đối tượng chứa cả account và token
    } else {
        return null; // Hoặc trả về null hoặc một giá trị mặc định tùy thuộc vào trường hợp sử dụng
    }
}