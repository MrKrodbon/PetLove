import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import NewsPage from "../../pages/NewsPage/NewsPage";
import FindPet from "../../pages/FindPetPage/FindPetPage";

import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFound from "../../pages/NotFoundPage/NotFoundPage";
import OurFriends from "../../pages/OurFriendsPage/OurFriendsPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import HomePage from "../../pages/HomePage/HomePage";
import { authLinks, navLinks } from "../../constants/appLinks/appLinks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={authLinks.register.to}
        element={<RestrictedRoute component={<RegisterPage />} />}
      />
      <Route
        path={authLinks.login.to}
        element={<RestrictedRoute component={<LoginPage />} />}
      />
      <Route path={navLinks.news.to} element={<NewsPage />} />
      <Route path={navLinks.friends.to} element={<OurFriends />} />
      <Route path={navLinks.findPet.to} element={<FindPet />} />
      <Route path={navLinks.home.to} element={<HomePage />} />
      {/* <Route
        path="/profile"
        element={
            <PrivateRoute>
            <UserPage />
            </PrivateRoute>
            }
            /> */}
      <Route path={navLinks.restrictPath.to} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
