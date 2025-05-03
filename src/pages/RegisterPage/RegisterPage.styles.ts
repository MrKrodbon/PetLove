import styled from "styled-components";
import { colors } from "../../constants/colors/colors";

export const RegisterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 35px;
  color: ${colors.WHITE_COLOR};

  height: 50px;

  background: ${colors.MAIN_COLOR};
  border-radius: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
