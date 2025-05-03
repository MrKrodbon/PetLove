import React from "react";
import Header from "../../layouts/Header/Header";
import {
  FlexSubtitle,
  HomePageBottomBlock,
  HomePageUpperBlock,
  MainTitle,
  SubTitle,
} from "./HomePage.styles";
import { Container } from "../../common/styles";

const HomePage = () => {
  return (
    <>
      <HomePageUpperBlock>
        <Container>
          <Header isHomePage />

          <FlexSubtitle>
            <MainTitle>
              Take good <span className="opacity-45">care</span> of your small
              pets
            </MainTitle>
            <div className="flex justify-end">
              <SubTitle>
                Choosing a pet for your home is a choice that is meant to enrich
                your life with immeasurable joy and tenderness.
              </SubTitle>
            </div>
          </FlexSubtitle>
        </Container>
      </HomePageUpperBlock>
      <HomePageBottomBlock />
    </>
  );
};

export default HomePage;
