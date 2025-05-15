import styled, { css } from "styled-components";
import { colors } from "../../constants/colors/colors";

export const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    width: fit-content;
  }
`;

export const Icon = styled.img<{ $position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;

  ${({ $position }) =>
    $position === "left"
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}
`;

export const StyledInput = styled.input<{
  $hasIcon: boolean;
  $iconPosition: "left" | "right";
  customWidth?: string;
}>`
  padding: 16px;
  padding-left: ${({ $hasIcon, $iconPosition }) =>
    $hasIcon && $iconPosition === "left" ? "48px" : "16px"};
  padding-right: ${({ $hasIcon, $iconPosition }) =>
    $hasIcon && $iconPosition === "right" ? "48px" : "16px"};

  width: ${({ customWidth }) => customWidth || "100%"};
  height: 42px;
  background-color: ${colors.WHITE_COLOR};

  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`;
