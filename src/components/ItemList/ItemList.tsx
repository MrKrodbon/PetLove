import {
  FriendsItemProps,
  ItemListProps,
  NewsItemProps,
  PetItemProps,
} from "../../types/types";
import NewsItem from "./ListItems/NewsItem";
import {
  useGetFriendsQuery,
  useGetNewsQuery,
  useGetPetsQuery,
} from "../../redux/news/operations";
import { ItemListWrapper } from "./ItemList.styles";

import { useAppDispatch } from "../../hooks/hooks";
import { setTotalPages } from "../../redux/news/slice";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../redux/news/selectors";
import { useEffect } from "react";
import FriendsItem from "./ListItems/FriendsItem";
import PetItem from "./ListItems/PetItem";

const ItemList = ({ isFriendsList, isNewsList, isPetList }: ItemListProps) => {
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

  const { data: friendsList } = useGetFriendsQuery({});

  const { data: petsList } = useGetPetsQuery({});

  useEffect(() => {
    if (newsList) {
      dispatch(setTotalPages(newsList.totalPages));
    }
  }, [newsList, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <></>;
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
      {isPetList &&
        petsList?.results.map((p: PetItemProps) => {
          return <PetItem key={p._id} {...p} />;
        })}
    </ItemListWrapper>
  );
};

export default ItemList;
