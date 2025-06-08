import React from "react";
import { Container, Title } from "../../common/styles";
import Header from "../../layouts/Header/Header";
import { HeaderWrapper, NewsContainer } from "../NewsPage/NewsPage.styles";
import ItemList from "../../components/ItemList/ItemList";
import FilterSearchField from "../../components/FilterSearchField/FilterSearchField";
import { FindPetContainer } from "./FindPetPage.styles";
import Pagination from "../../components/Pagination/Pagination";
import { useGetPetsQuery } from "../../redux/news/operations";
import { useAppSelector } from "../../hooks/hooks";
import { selectCurrentPage } from "../../redux/news/selectors";

const FindPet = () => {
  const currentPage = useAppSelector(selectCurrentPage);
  const { data: petList } = useGetPetsQuery({ page: currentPage, limit: 10 });

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <NewsContainer isFlexChange>
        <Title>Find your favourite pet</Title>
        <FilterSearchField />
        <ItemList isPetList />
      </NewsContainer>
      <div className="flex flex-row justify-center w-full">
        <Pagination paginationList={petList} currentPage={currentPage} />
      </div>
    </Container>
  );
};

export default FindPet;
