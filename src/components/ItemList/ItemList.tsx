import React, { useEffect } from "react";

import { ItemListProps } from "../../types/types";
import NewsItem from "./ListItems/NewsItem";
import { useGetNewsQuery } from "../../redux/news/operations";
import { ItemListWrapper } from "./ItemList.styles";
import { StoreType } from "../../redux/store";
import { useAppSelector } from "../../hooks/hooks";

const ItemList = ({ isFriendsList, isNewsList }: ItemListProps) => {
  const currentPage = useAppSelector((state: StoreType) => state.news.page);
  const { data, error, isLoading } = useGetNewsQuery({
    page: currentPage,
    limit: 10,
    search: "dog",
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data.results);

  return (
    <ItemListWrapper>
      {isNewsList &&
        data?.results.map((news) => {
          return (
            <NewsItem
              imgSrc={news.imgUrl || ""}
              alt={news.title || ""}
              title={news.title || ""}
              description={news.text || ""}
              date={news.date || ""}
              key={news.id || ""}
              moreInfo={news.url || ""}
            />
          );
        })}
      {/* {isNewsList && <Item />}
      {isPetList && <Item />} */}
    </ItemListWrapper>
  );
};

export default ItemList;
