import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { closeMenu } from "../../../redux/ui/slice";
import { logout } from "../../../redux/auth/operations";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import css from "./AuthButtons.module.scss";
import { authLinks } from "../../../constants/appLinks/appLinks";
import { Button } from "../../Button/Button";

const AuthButtons = () => {
  const dispatch = useAppDispatch();

  const isUserLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLogoutUser = () => {
    dispatch(closeMenu());
    dispatch(logout());
  };

  return isUserLoggedIn ? (
    <Button
      type="button"
      className={css.logout}
      onClick={handleLogoutUser}
      label={authLinks.logout.label}
    />
  ) : (
    <>
      <NavLink to={authLinks.login.to}>
        <Button
          type="button"
          className={css.login}
          label={authLinks.login.label}
        />
      </NavLink>
      <NavLink to={authLinks.register.to}>
        <Button
          type="button"
          className={css.register}
          label={authLinks.register.label}
        />
      </NavLink>
    </>
  );
};

export default AuthButtons;
