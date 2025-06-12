import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import NewsPage from "../../pages/NewsPage/NewsPage";
import FindPet from "../../pages/FindPetPage/FindPetPage";

import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFound from "../../pages/NotFoundPage/NotFoundPage";
import OurFriends from "../../pages/OurFriendsPage/OurFriendsPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import HomePage from "../../pages/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/register"
        element={<RestrictedRoute component={<RegisterPage />} />}
      />
      <Route
        path="/login"
        element={<RestrictedRoute component={<LoginPage />} />}
      />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/friends" element={<OurFriends />} />
      <Route path="/find-pet" element={<FindPet />} />
      <Route path="/" element={<HomePage />} />
      {/* <Route
        path="/profile"
        element={
            <PrivateRoute>
            <UserPage />
            </PrivateRoute>
            }
            /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
