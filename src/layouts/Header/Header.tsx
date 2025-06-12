import { MainHeader } from "./Header.styles";
import { NavLink } from "react-router-dom";
import { HeaderProps } from "../../types/types";
import { Navigation } from "../../components/Navigation/Navigation";
import AuthNavigation from "../../components/AuthNavigation/AuthNavigation";

const Header = ({ isHomePage }: HeaderProps) => {
  return (
    <MainHeader>
      {isHomePage ? (
        <NavLink to="/">
          <img src="icons/HomePageLogo.svg" alt="logo" />
        </NavLink>
      ) : (
        <NavLink to="/">
          <img src="icons/logo.svg" alt="logo" />
        </NavLink>
      )}

      <Navigation />
      <AuthNavigation />
    </MainHeader>
  );
};

export default Header;
