import React, { useEffect } from "react";

import { ItemListProps } from "../../types/types";
import NewsItem from "./ListItems/NewsItem";
import { useAppDispatch } from "../../hooks/hooks";
import { useSelector } from "react-redux";
import { selectGetNews } from "../../redux/news/selectors";
import { getNews } from "../../redux/news/operations";
import { ItemListWrapper } from "./ItemList.styles";

const ItemList = ({ isFriendsList, isNewsList }: ItemListProps) => {
  const dispatch = useAppDispatch();
  const newsData = useSelector(selectGetNews);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <ItemListWrapper>
      {isNewsList &&
        newsData.news.length > 0 &&
        newsData.news.map((news) => {
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
