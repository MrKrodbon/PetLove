import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return isActive
    ? "text-blue-500 underline font-semibold" // Коли активне
    : "text-gray-700 hover:text-blue-500"; // Коли неактивне
};

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/login" className={buildLinkClass}>
          News
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          Find Pet
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          Our friends
        </NavLink>
      </nav>

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
