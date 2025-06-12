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
  // return (
  //   <Container>
  //     <Header />
  //     <NewsContainer>
  //       <Title>Friends</Title>
  //       <ItemList isFriendsList />
  //     </NewsContainer>
  //   </Container>
  // );
};

export default OurFriends;
