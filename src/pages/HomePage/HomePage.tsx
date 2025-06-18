import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";
import shared from "../../styles/shared.module.css";

const HomePage = () => {
  return (
    <>
      <div className={css["home-hero"]}>
        <div className={shared.container}>
          <Header isHomePage />

          <div className={css["home-hero_content"]}>
            <p className={css["home-hero_title"]}>
              Take good <span className="opacity-45">care</span> of your small
              pets
            </p>
            <div className="flex justify-end">
              <p className={css["home-hero_subtitle"]}>
                Choosing a pet for your home is a choice that is meant to enrich
                your life with immeasurable joy and tenderness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css["home-hero_bottom_block"]} />
    </>
  );
};

export default HomePage;
