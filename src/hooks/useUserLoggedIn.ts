import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const useUserLoggedIn = () => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  const handleUserLoggedIn = () => {
    setUserLoggedIn(isUserLoggedIn);
  };

  useEffect(() => {
    handleUserLoggedIn();
  }, []);

  return userLoggedIn;
};

export default useUserLoggedIn;
