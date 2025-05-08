import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { RouteProps } from "../types/types";

const RestrictedRoute = ({ component, redirectTo = "/" }: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
