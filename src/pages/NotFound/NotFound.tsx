import React from "react";
import Header from "../../layouts/Header/Header";
import {
  HomePageButton,
  NotFoundImageContainer,
  NotFoundText,
} from "./NotFound.styles";

const NotFound = () => {
  return (
    <>
      <Header />
      <NotFoundImageContainer>
        <div className="flex  flex-col items-center gap-10">
          <img
            src="/public/images/NotFound.png"
            alt="Not found image with cat"
          />
          <div className="flex  flex-col items-center gap-5">
            <NotFoundText>Ooops! This page not found :(</NotFoundText>
            <HomePageButton>To home page</HomePageButton>
          </div>
        </div>
      </NotFoundImageContainer>
    </>
  );
};

export default NotFound;
