import useUserLoggedIn from "../../hooks/useUserLoggedIn";
import AuthButtons from "../AuthButtons/AuthButtons";
import UserDisplay from "../UserDisplay/UserDisplay";
import BurgerMenuController from "../BurgerMenuController/BurgerMenuController";

const AuthNavigation = () => {
  const isUserLoggedIn = useUserLoggedIn();

  return (
    <div className="flex items-center gap-3">
      {isUserLoggedIn ? <UserDisplay /> : <AuthButtons />}
      <BurgerMenuController />
    </div>
  );
};

export default AuthNavigation;
