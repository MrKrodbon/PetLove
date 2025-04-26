import React from "react";
import Header from "../../layouts/Header/Header";

import {
  LoginFormContainer,
  LoginImageComment,
  LoginImageContainer,
  PetImageComment,
  PetNameComment,
} from "./LoginPage.styles";
import { colors } from "../../constants/colors/colors";
import { LoginButton } from "../../layouts/Header/Header.styles";
import { Input } from "../../common/styles";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row gap-8">
        <LoginImageContainer>
          <img src="/public/images/LoginImage.jpg" alt="loginMainImage" />

          <LoginImageComment>
            <PetImageComment>
              <img src="/public/icons/petEmoji.png" />
            </PetImageComment>
            <div>
              <PetNameComment>
                <div className="flex flex-row justify-between">
                  <p className="text-base">Rich</p>
                  <p>
                    <span className="text-xs text-gray-400">Birthday</span> :{" "}
                    <span className="text-xs text-black">21.09.2020</span>
                  </p>
                </div>
                <p className="text-xs text-gray-700">
                  Rich would be the perfect addition to an active family that
                  loves to play and go on walks. I bet he would love having a
                  doggy playmate too!
                </p>
              </PetNameComment>
            </div>
          </LoginImageComment>
        </LoginImageContainer>
        <LoginFormContainer>
          <div className="flex flex-col gap-4 mb-8">
            <p className="text-5xl text-left">Log in</p>
            <p className="text-left">
              Welcome! Please enter your credentials to login to the platform:
            </p>
          </div>
          <form className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <Input placeholder="Email" />
              <Input placeholder="Password" />
            </div>
            <LoginButton className="uppercase">Log in</LoginButton>
            <p>
              Don't have an account?{" "}
              <a className="text-shadow-amber-500">Register</a>
            </p>
          </form>
        </LoginFormContainer>
      </div>
      ;
    </>
  );
};

export default LoginPage;
