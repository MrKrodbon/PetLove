import styled from "styled-components";
import { sizes } from "./sizes";
import { colors } from "../constants/colors/colors";

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
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  gap: 10px;

  width: 424px;
  height: 52px;

  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const AuthImageContainer = styled.div`
  position: relative;
  width: 592px;
  height: 654px;
  background-color: pink;
  border-radius: 60px;
`;

export const AuthFormContainer = styled.div`
  width: 592px;
  height: 654px;
  padding: 118px 84px;
`;

export const AuthImageComment = styled.div`
  position: absolute;
  top: 436px;
  left: 61px;

  background-color: ${colors.WHITE_COLOR};

  width: 294px;
  height: 121px;

  display: flex;
  flex-diraction: row;
  border-radius: ${sizes.xMedium}px;
`;

export const AuthPetNameComment = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: ${colors.BUTTON_COLOR};

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
