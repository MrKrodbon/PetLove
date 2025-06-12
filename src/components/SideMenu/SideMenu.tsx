import { SideMenuLayout } from "./SideMenu.styles";
import { NavLink } from "react-router-dom";
import { Button, LoginButton, RegisterButton } from "../../common/styles";
import { AuthNavigation } from "../../layouts/Header/Header.styles";
import { HeaderProps } from "../../types/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleMenu } from "../../redux/ui/slice";
import { logout } from "../../redux/auth/operations";
import useUserLoggedIn from "../../hooks/useUserLoggedIn";
import { Navigation } from "../Navigation/Navigation";

const SideMenu = ({ isOpen, isHomePage = false }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useUserLoggedIn();

  const handleCloseModal = () => {
    dispatch(toggleMenu());
  };
  const handleLogoutUser = () => {
    // dispatch(toggleMenu());
    dispatch(logout());
  };

  return (
    <SideMenuLayout isOpen={isOpen} isHomePage={isHomePage}>
      <div className="flex items-end" onClick={handleCloseModal}>
        <img src="/public/icons/close.svg" />
      </div>
      <Navigation />
    </SideMenuLayout>
  );
};

export default SideMenu;
