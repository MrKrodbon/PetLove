import { NavLink, useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useMediaQuery } from "@uidotdev/usehooks";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import HomePageLogo from "@/assets/icons/HomePageLogo.svg?react";
import HomePageLogoMobile from "@/assets/icons/HomePageLogoMobile.svg?react";
import Logo from "@/assets/icons/logo.svg?react";
import LogoMobile from "@/assets/icons/logoMobile.svg?react";
import { defaultLinks } from "@/constants/appLinks/appLinks";
import s from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isUserLoggedIn = useAppSelector(selectIsLoggedIn);
  const homePagePath = defaultLinks[0].path;

  const mobile = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <div className={s.header}>
      {isHomePage ? (
        <NavLink to={homePagePath} className="flex items-center">
          {mobile ? <HomePageLogoMobile /> : <HomePageLogo />}
        </NavLink>
      ) : (
        <NavLink to={homePagePath} className="flex items-center">
          {mobile ? <LogoMobile /> : <Logo />}
        </NavLink>
      )}
      <Navigation isUserLoggedIn={isUserLoggedIn} />
    </div>
  );
};

export default Header;
