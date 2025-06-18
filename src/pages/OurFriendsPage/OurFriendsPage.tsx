import usePageData from "../../hooks/usePageData";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

const OurFriends = () => {
  const {
    title = "",
    friendsList = [],
    currentPage = 1,
  } = usePageData({
    pageType: "ourFriendsList",
  });

  return (
    <PageTemplate
      title={title}
      itemsList={friendsList}
      currentPage={currentPage}
      listType={"ourFriendsList"}
    />
  );
};

export default OurFriends;
