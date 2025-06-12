import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { useAppSelector } from "./hooks/useAppSelector";
import { setToken } from "./redux/auth/slice";
import { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import { useAppDispatch } from "./hooks/useAppDispatch";

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
