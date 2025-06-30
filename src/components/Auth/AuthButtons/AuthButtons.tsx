import { NavLink } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { closeMenu } from "@/redux/ui/slice";
import { logout } from "@/redux/auth/operations";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import s from "./AuthButtons.module.scss";
import { authLinks } from "@/constants/appLinks/appLinks";
import { Button } from "@/components/Button/Button";
import clsx from "clsx";

const AuthButtons = () => {
  const dispatch = useAppDispatch();

  const isUserLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLogoutUser = () => {
    dispatch(closeMenu());
    dispatch(logout());
  };

  const logoutLabel = authLinks.find((item) => item.label === "Log out");

  return isUserLoggedIn ? (
    <Button
      type="button"
      className={s.logout}
      onClick={handleLogoutUser}
      label={logoutLabel?.label}
    />
  ) : (
    <>
      {authLinks
        .filter((nav) => nav.isAuth === isUserLoggedIn)
        .map(({ path, label }) => (
          <NavLink to={path}>
            <Button
              type="button"
              className={clsx(s.login, {
                [s.register]: label === "Registration",
              })}
              label={label}
            />
          </NavLink>
        ))}
    </>
  );
};

export default AuthButtons;
