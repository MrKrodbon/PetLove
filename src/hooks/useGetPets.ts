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
  const page = useAppSelector(selectPetsPage);
  const totalPages = useAppSelector(seelctPetsTotalPages);
  const petsList = useAppSelector(selectPets);

  useEffect(() => {
    dispatch(getPets({ page: page }));
  }, [page]);

  return { petsList, page, totalPages };
};

export default useGetPets;
