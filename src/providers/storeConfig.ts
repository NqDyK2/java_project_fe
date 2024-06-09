import { configureStore, combineReducers } from '@reduxjs/toolkit';
import RegisterSlice from '../features/register/Register.slice';
import LoginSlice from '../features/login/Login.slice';
import addUserSlice from '../features/admin/user/add-user/addUser.slice';
import allUserSlice from '../features/admin/user/manager-data/Users.slice';
import editUserSlice from '../features/admin/user/edit-user/editUser.slice';
// import RoomsSlice from "@client/features/rooms/room.slice";
// import AuthSlice from '@client/features/auth/Auth.slice';
// import ApartmentSlice from '@client/features/apartment/Apartment.slice';
// import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
    // auth: AuthSlice,
    // rooms: RoomsSlice,
    // apartment: ApartmentSlice,
    login: LoginSlice,
    register: RegisterSlice,
    addUser: addUserSlice,
    allUsers: allUserSlice,
    editUser: editUserSlice,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
            actionCreatorCheck: true,
        }),
});
// export const psStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
