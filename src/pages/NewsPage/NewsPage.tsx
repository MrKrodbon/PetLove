import React from "react";
import Header from "../../layouts/Header/Header";
import { Container, Title } from "../../common/styles";
import { HeaderWrapper, NewsContainer } from "./NewsPage.styles";
import SearchField from "../../components/SearchField/SearchField";
import ItemList from "../../components/ItemList/ItemList";
import Pagination from "../../components/Pagination/Pagination";
import { useAppSelector } from "../../hooks/hooks";
import { useGetNewsQuery } from "../../redux/news/operations";

const NewsPage = () => {
  const { data: newsList } = useGetNewsQuery({ page: currentPage, limit: 10 });

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
        <Pagination paginationList={newsList} currentPage={currentPage} />
      </div>
    </Container>
  );
};

export default NewsPage;
