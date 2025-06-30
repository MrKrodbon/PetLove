import { Route, Routes } from "react-router-dom";
import {
  authLinks,
  defaultLinks,
  navLinks,
} from "../constants/appLinks/appLinks";
import RestrictedRoute from "./RestrictedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {navLinks.map(({ path, element, isPrivate }) => (
        <Route
          path={path}
          element={
            isPrivate ? <RestrictedRoute component={element} /> : element
          }
        />
      ))}
      {authLinks.map(({ path, element, isPrivate }) => (
        <Route
          path={path}
          element={
            isPrivate ? <RestrictedRoute component={element} /> : element
          }
        />
      ))}
      {defaultLinks.map(({ path, element, isPrivate }) => (
        <Route
          path={path}
          element={
            isPrivate ? <RestrictedRoute component={element} /> : element
          }
        />
      ))}

      {/* <Route
        path="/profile"
        element={
            <PrivateRoute>
            <UserPage />
            </PrivateRoute>
            }
            /> */}
    </Routes>
  );
};

export default AppRoutes;
