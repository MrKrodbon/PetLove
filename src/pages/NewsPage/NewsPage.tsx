import React from "react";
import Header from "../../layouts/Header/Header";
import { Container, Title } from "../../common/styles";
import { HeaderWrapper, NewsContainer } from "./NewsPage.styles";
import SearchField from "../../components/SearchField/SearchField";
import ItemList from "../../components/ItemList/ItemList";
import Pagination from "../../components/Pagination/Pagination";

const NewsPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <NewsContainer>
        <Title>News</Title>
        {/* <SearchFieldWrapper>
          <SearchField />
        </SearchFieldWrapper> */}
        <ItemList isNewsList />
      </NewsContainer>
      <div className="flex flex-row justify-center w-full">
        <Pagination />
      </div>
    </Container>
  );
};

export default NewsPage;
