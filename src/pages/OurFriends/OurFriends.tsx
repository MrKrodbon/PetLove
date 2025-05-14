import React from "react";
import { Container, Title } from "../../common/styles";
import { NewsContainer } from "../NewsPage/NewsPage.styles";
import ItemList from "../../components/ItemList/ItemList";
import Header from "../../layouts/Header/Header";

const OurFriends = () => {
  return (
    <Container>
      <Header />
      <NewsContainer>
        <Title>Friends</Title>
        <ItemList isFriendsList />
      </NewsContainer>
    </Container>
  );
};

export default OurFriends;
