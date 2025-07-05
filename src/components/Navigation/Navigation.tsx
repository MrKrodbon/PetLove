import UserDisplay from "../UserDisplay/UserDisplay";
import BurgerMenuController from "./BurgerMenuController/BurgerMenuController";
import { navLinks } from "../../constants/appLinks/appLinks";
import AuthButtons from "../Auth/AuthButtons/AuthButtons";
import NavItem from "./NavItem/NavItem";

interface NavigationProps {
  isUserLoggedIn: boolean;
}

export const Navigation = ({ isUserLoggedIn }: NavigationProps) => {
  return (
    <>
      <div className="hidden md:hidden xl:flex xl:flex-row  xl:items-center xl:gap-2 xl:justify-evenly">
        {navLinks.map(({ path, label }) => (
          <NavItem key={label} to={path} label={label || ""} />
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
