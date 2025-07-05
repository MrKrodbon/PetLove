import { NavLink } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { closeMenu } from "@/redux/ui/slice";
import { logout } from "@/redux/auth/operations";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import { authLinks } from "@/constants/appLinks/appLinks";
import { Button } from "@/components/Button/Button";

const AuthButtons = () => {
  const dispatch = useAppDispatch();

  const isUserLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLogoutUser = () => {
    dispatch(closeMenu());
    dispatch(logout());
  };

  const labelToShow = authLinks.filter(
    (label) => label.isAuth === isUserLoggedIn
  );

  return labelToShow.map(({ path, label, isAuth }) =>
    isAuth ? (
      <Button
        type="button"
        variant="primary"
        onClick={handleLogoutUser}
        label={label}
      />
    ) : (
      <NavLink to={path}>
        <Button
          type="button"
          variant={label === "Registration" ? "secondary" : "primary"}
          label={label}
        />
      </NavLink>
    )
  );
};

export default AuthButtons;
