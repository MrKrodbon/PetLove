import {
  FriendsItemProps,
  ItemListProps,
  NewsItemProps,
  PetItemProps,
} from "../../types/types";
import { useGetNewsQuery } from "../../redux/news/operations";

import { setTotalPages } from "../../redux/news/slice";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../redux/news/selectors";
import { useEffect } from "react";
import PetItem from "./PetListItem/PetItem";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import NewsItem from "./NewsListItem/NewsItem";
import FriendsItem from "./FriendsListItem/FriendsItem";

const ItemList = ({ listType }: ItemListProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(selectSearchValue);

  const {
    data: newsList,
    error,
    isLoading,
  } = useGetNewsQuery(
    {
      page,
      search: searchValue,
      limit: 10,
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (newsList) {
      dispatch(setTotalPages(newsList.totalPages));
    }
  }, [newsList, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-between flex-wrap gap-5 list-none mb-11 md:mb-[60px]">
      {listType === "newsList" &&
        newsList?.results.map((n: NewsItemProps) => {
          return (
            <NewsItem
              imgUrl={n.imgUrl || ""}
              alt={n.title || ""}
              title={n.title || ""}
              text={n.text || ""}
              date={n.date || ""}
              key={n.id || ""}
              moreInfo={n.moreInfo || ""}
            />
          );
        })}
      {/* {listType === "ourFriendsList" &&
        friendsList.map((f: FriendsItemProps) => {
          return (
            <FriendsItem
              address={f.address || ""}
              addressURL={f.addressURL || ""}
              title={f.title || ""}
              email={f.email || ""}
              imageUrl={f.imageUrl || ""}
              phone={f.phone || ""}
              url={f.url || ""}
              workDays={f.workDays || []}
              key={f.id || ""}
            />
          );
        })}
      {listType === "petList" &&
        petsList?.results.map((p: PetItemProps) => {
          return <PetItem key={p._id} {...p} />;
        })} */}
    </div>
  );
};

export default ItemList;
