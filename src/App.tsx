import axios from "axios";
import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setToken } from "./redux/auth/slice";
import { useEffect } from "react";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useAppDispatch();

  const isRefreshing = useAppSelector(selectIsRefreshing);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken(token));
      dispatch(refreshUser());
    }
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading user...</div>;
  }

  return <AppRoutes />;
}

export default App;
