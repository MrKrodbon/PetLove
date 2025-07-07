import FriendsListItem from "@/components/ItemList/FriendsListItem/FriendsListItem";
import PageTemplate from "@/components/layouts/PageTemplate/PageTemplate";
import useGetFriends from "@/hooks/useGetFriends";
import { FriendsItem } from "@/types/types";
import React from "react";

const OurFriends = () => {
  const { results } = useGetFriends();

  const renderFriend = React.useCallback(
    (f: FriendsItem) => <FriendsListItem key={f.id} {...f} />,
    []
  );

  return (
    <PageTemplate<FriendsItem>
      title={"Our Friends"}
      items={results}
      renderItem={renderFriend}
    />
  );
};

export default OurFriends;
