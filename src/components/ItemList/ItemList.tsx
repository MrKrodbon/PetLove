import { FriendsItemProps, ItemListProps, NewsItem } from "../../types/types";
import NewsItem from "./NewsListItem/NewsItem";
import FriendsItem from "./FriendsListItem/FriendsItem";
import NewsListItem from "./NewsListItem/NewsItem";

const ItemList = ({ listType, itemsList }: ItemListProps) => {
  return (
    <div className="flex justify-between flex-wrap gap-5 list-none mb-11 md:mb-[60px]">
      {listType === "newsList" &&
        itemsList?.results.map((n: NewsItem) => {
          return (
            <NewsListItem
              imgUrl={n.imgUrl || ""}
              title={n.title || ""}
              text={n.text || ""}
              date={n.date || ""}
              key={n.id || ""}
              url={n.url || ""}
            />
          );
        })}
      {listType === "ourFriendsList" &&
        itemsList.map((f: FriendsItemProps) => {
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
      {/*
      {listType === "petList" &&
        petsList?.results.map((p: PetItemProps) => {
          return <PetItem key={p._id} {...p} />;
        })} */}
    </div>
  );
};

export default ItemList;
