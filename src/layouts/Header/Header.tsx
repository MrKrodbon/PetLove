import { useSelector } from "react-redux";
import { Button } from "../../common/styles";
import {
  AuthNavigation,
  BurgerMenu,
  HeaderNavigation,
  LoginButton,
  MainHeader,
  RegisterButton,
  UserName,
} from "./Header.styles";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUserData } from "../../redux/auth/selectors";
import SideMenu from "../../components/SideMenu/SideMenu";

import { selectIsBurgerMenuOpen } from "../../redux/ui/selectors";
import { useAppDispatch } from "../../hooks/hooks";
import { toggleMenu } from "../../redux/ui/slice";
import { HeaderProps } from "../../types/types";
import { Overlay } from "../../components/SideMenu/SideMenu.styles";

const buildLinkClass = ({ isActive }) => {
  return isActive
    ? "text-blue-500 underline font-semibold" // Коли активне
    : "text-gray-700 hover:text-blue-500"; // Коли неактивне
};

const Header = ({ isHomePage }: HeaderProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUserData);
  const isBurgerMenuOpen = useSelector(selectIsBurgerMenuOpen);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <MainHeader>
      {isHomePage ? (
        <img src="icons/HomePageLogo.svg" alt="logo" />
      ) : (
        <img src="icons/logo.svg" alt="logo" />
      )}

      <HeaderNavigation className="flex flex-row gap-2.5">
        <NavLink to="/news" className={buildLinkClass}>
          <Button>News</Button>
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          <Button>Find Pet</Button>
        </NavLink>
        <NavLink to="/friends" className={buildLinkClass}>
          <Button> Our friends</Button>
        </NavLink>
      </HeaderNavigation>
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <img src="/public/icons/user.svg" />
            <UserName>{name}</UserName>
          </div>
        ) : (
          <AuthNavigation>
            <NavLink to="/login">
              <LoginButton>Log in</LoginButton>
            </NavLink>
            <NavLink to="/register">
              <RegisterButton>Register</RegisterButton>
            </NavLink>
          </AuthNavigation>
        )}

        {isBurgerMenuOpen && (
          <Overlay
            isOpen={isBurgerMenuOpen}
            onClick={() => dispatch(toggleMenu())}
          />
        )}
        <SideMenu isOpen={isBurgerMenuOpen} isHomePage />

        <BurgerMenu onClick={toggle}>
          <img
            src="/icons/burgerMenu.svg"
            alt="burger menu"
            className="w-8 h-8"
          />
        </BurgerMenu>
      </div>
    </MainHeader>
  );
};

export default Header;
