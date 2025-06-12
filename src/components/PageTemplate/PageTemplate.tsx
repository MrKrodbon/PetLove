import React, { ReactNode } from "react";
import { Title } from "../../common/styles";
import Header from "../../layouts/Header/Header";
import {
  HeaderWrapper,
  NewsContainer,
} from "../../pages/NewsPage/NewsPage.styles";
import ItemList from "../ItemList/ItemList";
import Pagination from "../Pagination/Pagination";
import { PaginationList } from "../../types/types";

interface PageTemplateProps {
  title: string;
  listType: "newsList" | "ourFriendsList" | "petList";
  itemsList: PaginationList;
  currentPage: number;
}

const PageTemplate = ({
  title,
  listType,
  itemsList,
  currentPage,
}: PageTemplateProps) => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <NewsContainer>
        <Title>{title}</Title>
        {/* <SearchFieldWrapper>
          <SearchField />
        </SearchFieldWrapper> */}
        <ItemList listType={listType} />
      </NewsContainer>
      <div className="flex flex-row justify-center w-full">
        <Pagination paginationList={itemsList} currentPage={currentPage} />
      </div>
    </>
  );
};

export default PageTemplate;
