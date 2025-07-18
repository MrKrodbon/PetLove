import {
  getPets,
  getPetsCategories,
  getPetsSex,
  getPetsSpecies,
  getUkrainianCities,
} from "@/redux/pets/operations";
import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import {
  seelctPetsTotalPages,
  selectCities,
  selectFilterParams,
  selectPets,
  selectPetsCategories,
  selectPetsPage,
  selectPetsSex,
  selectPetsSpecies,
} from "@/redux/pets/selectors";
import {} from "@/redux/friends/selectors";

const useGetPets = () => {
  const dispatch = useAppDispatch();
  const { keyword, category, species, sex, locationId, byPopularity, byPrice } =
    useAppSelector(selectFilterParams);
  const page = useAppSelector(selectPetsPage);
  const totalPages = useAppSelector(seelctPetsTotalPages);
  const petsList = useAppSelector(selectPets);

  const petsSex = useAppSelector(selectPetsSex);
  const petsCategories = useAppSelector(selectPetsCategories);
  const petsSpecies = useAppSelector(selectPetsSpecies);
  const cities = useAppSelector(selectCities);
  useEffect(() => {
    dispatch(
      getPets({
        page,
        keyword,
        category,
        species,
        sex,
        locationId,
        byPrice,
        byPopularity,
      })
    );
    dispatch(getPetsCategories());
    dispatch(getPetsSex());
    dispatch(getPetsSpecies());
    dispatch(getUkrainianCities({}));
  }, [
    page,
    keyword,
    category,
    species,
    sex,
    locationId,
    byPrice,
    byPopularity,
    dispatch,
  ]);

  return {
    petsList,
    page,
    totalPages,
    petsSex,
    petsCategories,
    petsSpecies,
    cities,
  };
};

export default useGetPets;
