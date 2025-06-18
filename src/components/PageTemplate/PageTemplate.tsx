import React, { ReactNode, useMemo } from "react";
import { Title } from "../../common/styles";
import Header from "../Header/Header";
import {
  HeaderWrapper,
  NewsContainer,
} from "../../pages/NewsPage/NewsPage.styles";
import ItemList from "../ItemList/ItemList";
import Pagination from "../Pagination/Pagination";
import { PaginationList } from "../../types/types";
import SearchField from "../SearchField/SearchField";

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
      <div className="mb-[60px]">
        <Header />
      </div>

      <Title>{title}</Title>
      <div className="flex justify-center mb-6">{/* <SearchField /> */}</div>
      <ItemList listType={listType} />

      {/* <div className="flex flex-row justify-center w-full">
        <Pagination paginationList={itemsList} currentPage={currentPage} />
      </div> */}
    </>
  );
};

export default PageTemplate;
