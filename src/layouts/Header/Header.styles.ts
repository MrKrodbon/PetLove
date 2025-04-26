import styled from "styled-components";
import { colors } from "../../constants/colors/colors";

export const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 35px;
  gap: 10px;
  color: ${colors.WHITE_COLOR};

  height: 50px;

  background: ${colors.BUTTON_COLOR};
  border-radius: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RegisterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;
  color: ${colors.BUTTON_COLOR};

  width: 149px;
  height: 50px;

  background: ${colors.BUTTON_ACTION_COLOR};
  border-radius: 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
