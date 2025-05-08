import "./App.css";
import RestrictedRoute from "./components/RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
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
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
