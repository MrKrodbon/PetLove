import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { StoreType } from "../redux/store";

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
