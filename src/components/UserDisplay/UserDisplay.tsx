import { useAppSelector } from "../../hooks/useAppSelector";
import { selectUserData } from "../../redux/auth/selectors";

const UserDisplay = () => {
  const userData = useAppSelector(selectUserData);
  return (
    <div className="flex items-center gap-2">
      <img src="/public/icons/user.svg" />
      <p className="hidden md:block">{userData?.name}</p>
    </div>
  );
};

export default UserDisplay;
