import React from "react";
import { UserName } from "../../layouts/Header/Header.styles";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectUserData } from "../../redux/auth/selectors";

const UserDisplay = () => {
  const userData = useAppSelector(selectUserData);
  return (
    <div className="flex items-center gap-2">
      <img src="/public/icons/user.svg" />
      <UserName>{userData?.name}</UserName>
    </div>
  );
};

export default UserDisplay;
