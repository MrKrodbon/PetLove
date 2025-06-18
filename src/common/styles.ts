import styled, { css } from "styled-components";
import { colors } from "../constants/colors/colors";

interface AuthImageContainerProps {
  type: "login" | "register";
}

export const normalTextStyles = css`
  font-family: "Manrope";
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.03em;
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

export const Container = styled.div`
  padding: 0 32px;

  @media screen and (min-width: 320px) {
    padding: 0 20px;
  }
`;

export const Title = styled.p`
  ${normalTextStyles}
  color: ${colors.TEXT_COLOR};
  text-align: left;
  @media screen and (min-width: 1280px) {
    font-size: 54px;
    line-height: 54px;
  }
`;

export const BlockVectorLine = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 0px;
  border: 1px solid rgba(38, 38, 38, 0.1);
`;
