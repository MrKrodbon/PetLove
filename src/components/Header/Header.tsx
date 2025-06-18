import { NavLink } from "react-router-dom";
import { HeaderProps } from "../../types/types";
import { Navigation } from "../Navigation/Navigation";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = ({ isHomePage }: HeaderProps) => {
  const isUserLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <>
      <div className="flex flex-row justify-between  w-full pt-5 mb-5  md:pt-7 md:mb-8 xl:pt-11">
        {isHomePage ? (
          <NavLink to="/">
            <img src="icons/HomePageLogo.svg" alt="logo" />
          </NavLink>
        ) : (
          <NavLink to="/">
            <img src="icons/logo.svg" alt="logo" />
          </NavLink>
        )}
        <Navigation isUserLoggedIn={isUserLoggedIn} />
      </div>
    </>
  );
};

export default Header;
