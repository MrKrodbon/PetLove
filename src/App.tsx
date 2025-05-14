import "./App.css";
import RestrictedRoute from "./components/RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotFound from "./pages/NotFound/NotFound";
import OurFriends from "./pages/OurFriends/OurFriends";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";

function App() {
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
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
