import React from "react";
import { Container, Title } from "../../common/styles";
import Header from "../../layouts/Header/Header";
import { HeaderWrapper, NewsContainer } from "../NewsPage/NewsPage.styles";
import ItemList from "../../components/ItemList/ItemList";
import FilterSearchField from "../../components/FilterSearchField/FilterSearchField";
import { FindPetContainer } from "./FindPet.styles";

const FindPet = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <NewsContainer isFlexChange>
        <Title>Find your favourite pet</Title>
        {/* <ItemList isPetList /> */}
        <FilterSearchField />
      </NewsContainer>
      <div className="flex flex-row justify-center w-full">
        {/* <Pagination /> */}
      </div>
    </Container>
  );
};

export default FindPet;
