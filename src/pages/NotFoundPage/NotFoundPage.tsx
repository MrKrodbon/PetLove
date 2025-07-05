import React from "react";
import Header from "@/components/Header/Header";
import shared from "@/styles/shared.module.css";
import s from "./NotFoundPage.module.scss";
import { Button } from "@/components/Button/Button";
import NotFoundImage from "@/assets/images/NotFound.png";
import { NavLink } from "react-router-dom";
import { defaultLinks } from "@/constants/appLinks/appLinks";

const NotFound = () => {
  return (
    <div className={shared.container}>
      <Header />
      <div className={s.page}>
        <div className="flex  flex-col items-center gap-10">
          <img src={NotFoundImage} alt="Not found image with cat" />
          <div className="flex  flex-col items-center gap-5">
            <p className={s.title}>Ooops! This page not found :(</p>
            <NavLink to={defaultLinks[0].path}>
              <Button className={s.openHome} label="To home page" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
