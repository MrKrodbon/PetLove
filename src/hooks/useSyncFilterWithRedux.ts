import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useFilterParams } from "./useFilterParams";
import { setSearchParams } from "@/redux/pets/slice";

export const useSyncFilterWithRedux = () => {
  const dispatch = useAppDispatch();
  const { category, locationId, search, sex, species, byPopularity, byPrice } =
    useFilterParams();

  useEffect(() => {
    dispatch(
      setSearchParams({
        category,
        locationId,
        search,
        sex,
        species,
        byPopularity: byPopularity,
        byPrice: byPrice,
      })
    );
  }, [
    category,
    locationId,
    search,
    sex,
    species,
    byPopularity,
    byPrice,
    dispatch,
  ]);
};
