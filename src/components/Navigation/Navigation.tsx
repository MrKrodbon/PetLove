import UserDisplay from "../UserDisplay/UserDisplay";
import BurgerMenuController from "../BurgerMenuController/BurgerMenuController";
import { navLinks } from "../../constants/appLinks/appLinks";
import NavItem from "./NavItem/NavItem";
import AuthButtons from "./AuthButtons/AuthButtons";

interface NavigationProps {
  isUserLoggedIn: boolean;
}

type NavigationItem = (typeof navLinks)[keyof typeof navLinks];

export const Navigation = ({ isUserLoggedIn }: NavigationProps) => {
  return (
    <>
      <div className="flex flex-row  items-center gap-2 justify-evenly">
        {Object.values(navLinks).map((navItem: NavigationItem) => (
          <NavItem key={navItem.to} to={navItem.to} label={navItem.label} />
        ))}
      </div>
      {isUserLoggedIn ? (
        <>
          <UserDisplay />
          <div className="xl:hidden">
            <BurgerMenuController />
          </div>
        </>
      ) : (
        <>
          <div className="hidden  xl:flex gap-1.5">
            <AuthButtons />
          </div>
          <BurgerMenuController />
        </>
      )}
    </>
  );
};
