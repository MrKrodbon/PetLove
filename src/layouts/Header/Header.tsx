import React from "react";
import { Button } from "../../common/styles";
import { LoginButton, RegisterButton } from "./Header.styles";

const Header = () => {
  return (
    <div className="fixed top-0  left-0 flex flex-row  justify-between w-full px-8 py-11">
      <img src="/public/icons/logo.svg" alt="logo" />
      <div className="flex flex-row gap-2.5">
        <Button>News</Button>
        <Button>Find pet</Button>
        <Button>Our friends</Button>
      </div>
      <div className="flex flex-row gap-2">
        <LoginButton>Log in</LoginButton>
        <RegisterButton>Register</RegisterButton>
      </div>
    </div>
  );
};

export default Header;
