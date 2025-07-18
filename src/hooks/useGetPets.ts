import { getPets } from "@/redux/pets/operations";
import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import {
  seelctPetsTotalPages,
  selectPets,
  selectPetsPage,
} from "@/redux/pets/selectors";
import {} from "@/redux/friends/selectors";

const useGetPets = () => {
  const dispatch = useAppDispatch();
<<<<<<< Updated upstream
=======
  const { keyword, category, species, sex, locationId, byPopularity, byPrice } =
    useAppSelector(selectFilterParams);
>>>>>>> Stashed changes
  const page = useAppSelector(selectPetsPage);
  const totalPages = useAppSelector(seelctPetsTotalPages);
  const petsList = useAppSelector(selectPets);

  useEffect(() => {
<<<<<<< Updated upstream
    dispatch(getPets({ page: page }));
  }, [page]);
=======
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
>>>>>>> Stashed changes

  return { petsList, page, totalPages };
};

export default useGetPets;
