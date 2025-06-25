import PageTemplate from "@/components/layouts/PageTemplate/PageTemplate";
import useGetFriends from "@/hooks/useGetFriends";

const OurFriends = () => {
  const friendsList = useGetFriends();
  console.log(friendsList, "friends");

  return (
    <PageTemplate
      title={friendsList.results.title}
      itemsList={friendsList.results}
    />
  );
};

export default OurFriends;
