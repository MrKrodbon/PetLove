import PageTemplate from "../../components/PageTemplate/PageTemplate";
import useGetFriends from "../../hooks/useGetFriends";

const OurFriends = () => {
  const friendsList = useGetFriends();
  console.log(friendsList, "friends");

  return (
    <PageTemplate
      title={friendsList.title}
      itemsList={friendsList}
      listType={"ourFriendsList"}
    />
  );
};

export default OurFriends;
