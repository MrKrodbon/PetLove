import React from "react";
import Header from "../../components/Header/Header";
import shared from "../../styles/shared.module.css";
import css from "./NotFoundPage.module.css";

const NotFound = () => {
  return (
    <div className={shared.container}>
      <Header />
      <div className={css.not_found_page}>
        <div className="flex  flex-col items-center gap-10">
          <img
            src="/public/images/NotFound.png"
            alt="Not found image with cat"
          />
          <div className="flex  flex-col items-center gap-5">
            <p className={css.not_found_page_title}>
              Ooops! This page not found :(
            </p>
            <button className={css["not_found_page-open-home"]}>
              To home page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
