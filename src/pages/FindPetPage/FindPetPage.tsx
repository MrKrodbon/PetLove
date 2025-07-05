import PetListItem from "@/components/ItemList/PetListItem/PetListItem";
import PageTemplate from "@/components/layouts/PageTemplate/PageTemplate";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import useGetPets from "@/hooks/useGetPets";
import { setNewPage } from "@/redux/pets/slice";
import { PetItem } from "@/types/types";

const FindPet = () => {
  // return (
  //   <Container>
  //     <HeaderWrapper>
  //       <Header />
  //     </HeaderWrapper>
  //     <NewsContainer isFlexChange>
  //       <Title>Find your favourite pet</Title>
  //       <FilterSearchField />
  //       <ItemList isPetList />
  //     </NewsContainer>
  //     <div className="flex flex-row justify-center w-full">
  //       <Pagination paginationList={petList} currentPage={currentPage} />
  //     </div>
  //   </Container>
  // );

  // const {
  //   title = "",
  //   petList = [],
  //   currentPage = 1,
  // } = usePageData({
  //   pageType: "petList",
  // });

  const { petsList, page, totalPages } = useGetPets();
  const dispatch = useAppDispatch();

  const handleChangePage = (newPage: number) => {
    console.log(newPage);

    dispatch(setNewPage(newPage));
  };

  return (
    <PageTemplate<PetItem>
      title={"Find your favorite pet"}
      items={petsList.results}
      hasFilterPanel
      onPageChange={handleChangePage}
      pagination={{ page, totalPages }}
      renderItem={(p) => <PetListItem key={p._id} {...p} />}
    />
  );
};

export default FindPet;
