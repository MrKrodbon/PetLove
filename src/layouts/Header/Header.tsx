import { Button } from "../../common/styles";
import {
  AuthNavigation,
  BurgerMenu,
  HeaderNavigation,
  LoginButton,
  MainHeader,
  RegisterButton,
} from "./Header.styles";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  isHomePage?: boolean;
}

const buildLinkClass = ({ isActive }) => {
  return isActive
    ? "text-blue-500 underline font-semibold" // Коли активне
    : "text-gray-700 hover:text-blue-500"; // Коли неактивне
};

const Header = ({ isHomePage }: HeaderProps) => {
  return (
    <MainHeader>
      {isHomePage ? (
        <img src="icons/HomePageLogo.svg" alt="logo" />
      ) : (
        <img src="icons/logo.svg" alt="logo" />
      )}

      <HeaderNavigation className="flex flex-row gap-2.5">
        <NavLink to="/login" className={buildLinkClass}>
          <Button>News</Button>
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          <Button>Find Pet</Button>
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          <Button> Our friends</Button>
        </NavLink>
      </HeaderNavigation>

      <AuthNavigation>
        <NavLink to="/login">
          <LoginButton>Log in</LoginButton>
        </NavLink>
        <NavLink to="/register">
          <RegisterButton>Register</RegisterButton>
        </NavLink>
      </AuthNavigation>
      <BurgerMenu>
        <img
          src="/icons/burgerMenu.svg"
          alt="burger menu"
          className="w-8 h-8"
        />
      </BurgerMenu>
    </MainHeader>
  );
};

export default Header;
