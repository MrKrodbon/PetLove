import Header from "../../components/Header/Header";
import s from "./HomePage.module.scss";
import shared from "../../styles/shared.module.css";

const HomePage = () => {
  return (
    <>
      <div className={shared.container}>
        <div className={s.hero}>
          <Header />
          <div className={s.content}>
            <p className={s.title}>
              Take good <span className="opacity-45">care</span> of your small
              pets
            </p>
            <div className="flex justify-end">
              <p className={s.subtitle}>
                Choosing a pet for your home is a choice that is meant to enrich
                your life with immeasurable joy and tenderness.
              </p>
            </div>
          </div>
        </div>
        <div className={s.heroBottomBlock} />
      </div>
    </>
  );
};

export default HomePage;
