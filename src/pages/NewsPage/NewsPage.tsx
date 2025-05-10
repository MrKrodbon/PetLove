import React from "react";
import Header from "../../layouts/Header/Header";
import { Container } from "../../common/styles";
import {
  HeaderWrapper,
  NewsContainer,
  NewsTitle,
  SearchFieldWrapper,
} from "./NewsPage.styles";
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
        <NewsTitle>News</NewsTitle>
        <SearchFieldWrapper>
          <SearchField />
        </SearchFieldWrapper>
        <ItemList isNewsList />
      </NewsContainer>
      <div className="flex flex-row justify-center w-full">
        <Pagination />
      </div>
    </Container>
  );
};

export default NewsPage;
