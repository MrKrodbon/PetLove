import styled from "styled-components";
import { sizes } from "./sizes";
import { colors } from "../constants/colors/colors";

interface AuthImageContainerProps {
  type: "login" | "register";
}

export const Button = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  gap: ${sizes.medium}px;

  height: 50px;

  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 295px;
  height: 42px;

  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  flex: none;
  order: 0;
  flex-grow: 0;

  @media screen and (min-width: 768px) {
    width: 424px;
    height: 52px;
  }
`;

export const AuthImageContainer = styled.div<AuthImageContainerProps>`
  position: relative;
  width: 335px;
  height: 280px;
  border-radius: 60px;

  background-image: ${(props) =>
    props.type === "login"
      ? "url(/public/images/LoginImage/LoginImageMobile.jpg)"
      : "url(/public/images/RegisterImage/RegisterImageMobile.jpg)"};

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 302px;
    background-image: ${(props) =>
      props.type === "login"
        ? "url(/public/images/LoginImage/LoginImageTablet.jpg)"
        : "url(/public/images/RegisterImage/RegisterImageTablet.jpg)"};
  }
  @media screen and (min-width: 1280px) {
    width: 592px;
    height: 654px;
    background-image: ${(props) =>
      props.type === "login"
        ? "url(/public/images/LoginImage/LoginImageDesktop.jpg)"
        : "url(/public/images/RegisterImage/RegisterImageDesktop.jpg)"};
  }
`;

export const AuthFormContainer = styled.div`
  padding: 60px 20px;

  @media and screen (min-width: 768px) {
    padding: 71px 140px;
  }
  @media and screen (min-width: 1280px) {
    padding: 118px 84px;
  }
`;

export const AuthImageComment = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 436px;
    left: 61px;

    background-color: ${colors.WHITE_COLOR};

    width: 294px;
    height: 121px;

    display: flex;
    flex-diraction: row;
    border-radius: ${sizes.xMedium}px;
  }
`;

export const AuthPetNameComment = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: ${colors.MAIN_COLOR};

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 19px 16px 18px 0;
`;

export const AuthPetImageComment = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 194px;
  height: 60px;

  margin: ${sizes.large}px ${sizes.small}px ${sizes.xHuge}px ${sizes.large}px;
  background: ${colors.BUTTON_ACTION_COLOR};
`;

export const Container = styled.div`
  padding: 0 32px;

  @media screen and (min-width: 320px) {
    padding: 0 20px;
  }
`;
