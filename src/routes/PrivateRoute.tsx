import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import { RouteProps } from "@/types/types";

const PrivateRoute = ({ component }: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to="/login" replace />;
};

export default PrivateRoute;
