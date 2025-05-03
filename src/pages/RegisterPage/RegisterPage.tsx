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
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { AuthContainer } from "../LoginPage/LoginPage.styles";

const RegisterPage = () => {
  return (
    <Container>
      <Header />
      <AuthContainer>
        <AuthImageContainer type="register">
          <AuthImageComment>
            <AuthPetImageComment>
              <img src="/public/icons/catEmoji.png" />
            </AuthPetImageComment>
            <div>
              <AuthPetNameComment>
                <div className="flex flex-row justify-between">
                  <p className="text-base">Jack</p>
                  <p>
                    <span className="text-xs text-gray-400">Birthday</span> :{" "}
                    <span className="text-xs text-black">18.10.2021</span>
                  </p>
                </div>
                <p className="text-xs text-gray-700">
                  Jack is a gray Persian cat with green eyes. He loves to be
                  pampered and groomed, and enjoys playing with toys.
                </p>
              </AuthPetNameComment>
            </div>
          </AuthImageComment>
        </AuthImageContainer>
        <AuthFormContainer>
          <div className="flex flex-col gap-4 mb-8 w-fit">
            <p className="text-5xl text-left">Register</p>
            <p className="text-left">
              Thank you for your interest in our platform.
            </p>
          </div>
          <RegistrationForm />
        </AuthFormContainer>
      </AuthContainer>
    </Container>
  );
};

export default RegisterPage;
