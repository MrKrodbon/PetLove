import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
import { sizes } from "../../common/sizes";

export const FilterSearchFieldWrapper = styled.div`
  width: 100%;
  height: 378px;
  background-color: ${colors.BUTTON_ACTION_COLOR};
  padding: 20px;

  border-radius: 30px;
`;

export const Button = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: ${sizes.medium}px;

  height: 50px;

  border: none;
  border-radius: 30px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
