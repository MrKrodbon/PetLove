import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
import { sizes } from "../../common/sizes";
import { fonts } from "../../constants/fonts/fonts";

export const LoginImageContainer = styled.div`
  position: relative;
  width: 592px;
  height: 654px;
  background-color: pink;
  border-radius: 60px;
`;

export const LoginFormContainer = styled.div`
  width: 592px;
  height: 654px;
  padding: 118px 84px;
`;

export const LoginImageComment = styled.div`
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

export const PetNameComment = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: ${colors.BUTTON_COLOR};

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 19px 16px 18px 0;
`;

export const PetImageComment = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 194px;
  height: 60px;

  margin: ${sizes.large}px ${sizes.small}px ${sizes.xHuge}px ${sizes.large}px;
  background: ${colors.BUTTON_ACTION_COLOR};
`;
