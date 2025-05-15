import {
  FriendsItemProps,
  ItemListProps,
  NewsItemProps,
} from "../../types/types";
import NewsItem from "./ListItems/NewsItem";
import {
  useGetFriendsQuery,
  useGetNewsQuery,
} from "../../redux/news/operations";
import { ItemListWrapper } from "./ItemList.styles";

import { useAppDispatch } from "../../hooks/hooks";
import { setTotalPages } from "../../redux/news/slice";
import { useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectSearchValue,
} from "../../redux/news/selectors";
import { useEffect } from "react";
import FriendsItem from "./ListItems/FriendsItem";

const ItemList = ({ isFriendsList, isNewsList }: ItemListProps) => {
  const dispatch = useAppDispatch();
  const page = useSelector(selectCurrentPage);
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

  console.log(newsList);

  const { data: friendsList } = useGetFriendsQuery({});
  console.log(friendsList, "friends list");

  useEffect(() => {
    if (newsList) {
      dispatch(setTotalPages(newsList.totalPages));
    }
  }, [newsList, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(newsList);

  return (
    <ItemListWrapper>
      {isNewsList &&
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
      {isFriendsList &&
        friendsList?.map((f: FriendsItemProps) => {
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
      {/* {isPetList && <Item />}  */}
    </ItemListWrapper>
  );
};

export default ItemList;
