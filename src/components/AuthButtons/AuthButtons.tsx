import React from "react";
import { NavLink } from "react-router-dom";
import { LoginButton, RegisterButton } from "../../common/styles";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

const AuthButtons = () => {
  return (
    <AuthNavigation>
      <NavLink to="/login">
        <LoginButton>Log in</LoginButton>
      </NavLink>
      <NavLink to="/register">
        <RegisterButton>Register</RegisterButton>
      </NavLink>
    </AuthNavigation>
  );
};

export default AuthButtons;
