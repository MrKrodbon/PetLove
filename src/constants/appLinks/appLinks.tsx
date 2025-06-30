import FindPet from "@/pages/FindPetPage/FindPetPage";
import HomePage from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import NewsPage from "@/pages/NewsPage/NewsPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import OurFriends from "@/pages/OurFriendsPage/OurFriendsPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";

type RouteConf = {
  path: string;
  label?: string;
  element: React.ReactNode;
  isPrivate?: boolean;
  isAuth?: boolean;
};

export const navLinks: RouteConf[] = [
  { path: "/news", label: "News", element: <NewsPage /> },
  { path: "/find-pet", label: "Find Pet", element: <FindPet /> },
  { path: "/friends", label: "Our Friends", element: <OurFriends /> },
];

export const defaultLinks: RouteConf[] = [
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFoundPage /> },
];

export const authLinks: RouteConf[] = [
  {
    path: "/login",
    label: "Log in",
    element: <LoginPage />,
    isPrivate: true,
    isAuth: false,
  },
  {
    path: "/register",
    label: "Registration",
    element: <RegisterPage />,
    isPrivate: true,
    isAuth: false,
  },
  { path: "/", label: "Log out", element: <HomePage />, isAuth: true },
];

export const filterLabels = ["Popular", "Unpopular", "Cheap", "Expensive"];
