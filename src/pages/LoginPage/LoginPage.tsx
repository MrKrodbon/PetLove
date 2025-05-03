import React from "react";
import Header from "../../layouts/Header/Header";
import {
  AuthFormContainer,
  AuthImageComment,
  AuthImageContainer,
  AuthPetImageComment,
  AuthPetNameComment,
  Container,
} from "../../common/styles";
import LoginForm from "../../components/LoginForm/LoginForm";
import { AuthContainer } from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <Container>
      <Header />
      <AuthContainer>
        <AuthImageContainer type={"login"}>
          <AuthImageComment>
            <AuthPetImageComment>
              <img src="/public/icons/dogEmoji.png" />
            </AuthPetImageComment>
            <div>
              <AuthPetNameComment>
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
              </AuthPetNameComment>
            </div>
          </AuthImageComment>
        </AuthImageContainer>
        <AuthFormContainer>
          <div className="flex flex-col gap-4 mb-8 w-fit">
            <p className="text-5xl text-left">Log in</p>
            <p className="text-left">
              Welcome! Please enter your credentials to login to the platform:
            </p>
          </div>
          <LoginForm />
        </AuthFormContainer>
      </AuthContainer>
    </Container>
  );
};

export default LoginPage;
