// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// // import RoomsSlice from "@client/features/rooms/room.slice";
// // import AuthSlice from '@client/features/auth/Auth.slice';
// // import ApartmentSlice from '@client/features/apartment/Apartment.slice';
// // import persistStore from 'redux-persist/es/persistStore';
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { Dispatch, RootState } from "@client/providers/store/storeConfig";

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch = useDispatch.withTypes<Dispatch>();
// const rootReducer = combineReducers({
//     // auth: AuthSlice,
//     // rooms: RoomsSlice,
//     // apartment: ApartmentSlice,
// });
// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             thunk: true,
//             serializableCheck: false,
//             actionCreatorCheck: true,
//         }),
// });
// // export const psStore = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type Dispatch = typeof store.dispatch;
