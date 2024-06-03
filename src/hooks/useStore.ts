import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../providers/storeConfig";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<Dispatch>();