import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { toggleMenu } from "../../../redux/ui/slice";
import { logout } from "../../../redux/auth/operations";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import css from "./AuthButtons.module.scss";
import { authLinks } from "../../../constants/appLinks/appLinks";

const AuthButtons = () => {
  const dispatch = useAppDispatch();

  const isUserLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLogoutUser = () => {
    dispatch(toggleMenu());
    dispatch(logout());
  };

  return isUserLoggedIn ? (
    <button className={css.logout} onClick={handleLogoutUser}>
      Log out
    </button>
  ) : (
    <>
      <NavLink to={authLinks.login.to}>
        <button className={css.login}>{authLinks.login.label}</button>
      </NavLink>
      <NavLink to={authLinks.register.to}>
        <button className={css.register}>{authLinks.register.label}</button>
      </NavLink>
    </>
  );
};

export default AuthButtons;
