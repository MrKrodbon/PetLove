import PetListItem from "@/components/ItemList/PetListItem/PetListItem";
import PageTemplate from "@/components/layouts/PageTemplate/PageTemplate";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import useGetPets from "@/hooks/useGetPets";
import { setNewPage } from "@/redux/pets/slice";
import { PetItem } from "@/types/types";

const FindPetPage = () => {
  const dispatch = useAppDispatch();

  const handleChangePage = (newPage: number) => {
    dispatch(setNewPage(newPage));
  };

  const {
    petsSex,
    petsCategories,
    petsSpecies,
    cities,
    petsList,
    page,
    totalPages,
  } = useGetPets();

  return (
    <PageTemplate<PetItem>
      title={"Find your favorite pet"}
      items={petsList.results}
      filterOptions={{
        categoryOptions: petsCategories,
        sexOptions: petsSex,
        speciesOptions: petsSpecies,
        cities: cities,
      }}
      hasFilterPanel
      onPageChange={handleChangePage}
      pagination={{ page, totalPages }}
      renderItem={(p) => <PetListItem key={p._id} {...p} />}
    />
  );
};

export default FindPetPage;
