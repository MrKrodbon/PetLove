import styled from "styled-components";
import { colors } from "../../../constants/colors/colors";

export const PaginationButton = styled.button<{
  isCurrentPage?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  width: 44px;
  height: 44px;

  color: ${colors.TEXT_COLOR};

  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? colors.MAIN_COLOR : "transparent"};
`;
