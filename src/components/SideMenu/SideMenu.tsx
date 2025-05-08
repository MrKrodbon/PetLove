import { SideMenuLayout } from "./SideMenu.styles";
import { NavLink } from "react-router-dom";
import { Button } from "../../common/styles";
import {
  AuthNavigation,
  LoginButton,
  RegisterButton,
} from "../../layouts/Header/Header.styles";
import { HeaderProps } from "../../types/types";
import { useAppDispatch } from "../../hooks/hooks";
import { toggleMenu } from "../../redux/ui/slice";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const SideMenu = ({ isOpen, isHomePage = false }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  const handleCloseModal = () => {
    dispatch(toggleMenu());
  };
  const handleLogoutUser = () => {
    // dispatch(toggleMenu());
    dispatch(logout());
  };
  console.log("isUserLoggedIn", isUserLoggedIn);

  return (
    <SideMenuLayout isOpen={isOpen} isHomePage={isHomePage}>
      <div className="flex items-end" onClick={handleCloseModal}>
        <img src="/public/icons/close.svg" />
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <NavLink to="/login">
          <Button className="w-32">News</Button>
        </NavLink>
        <NavLink to="/register">
          <Button className="w-32">Find Pet</Button>
        </NavLink>
        <NavLink to="/register">
          <Button className="w-32"> Our friends</Button>
        </NavLink>
      </div>
      <div>
        <AuthNavigation className="flex-col gap-2.5 w-full" isMobileMenu>
          {isUserLoggedIn ? (
            <NavLink to="/">
              <LoginButton className="w-full" onClick={handleLogoutUser}>
                Log out
              </LoginButton>
            </NavLink>
          ) : (
            <>
              {" "}
              <NavLink to="/login">
                <LoginButton className="w-full" onClick={handleCloseModal}>
                  Log in
                </LoginButton>
              </NavLink>
              <NavLink to="/register">
                <RegisterButton className="w-full" onClick={handleCloseModal}>
                  Register
                </RegisterButton>
              </NavLink>
            </>
          )}
        </AuthNavigation>
      </div>
    </SideMenuLayout>
  );
};

export default SideMenu;
