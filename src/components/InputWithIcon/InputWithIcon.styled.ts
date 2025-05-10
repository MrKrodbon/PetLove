import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
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
}>`
  padding: 16px;
  padding-left: ${({ $hasIcon, $iconPosition }) =>
    $hasIcon && $iconPosition === "left" ? "48px" : "16px"};
  padding-right: ${({ $hasIcon, $iconPosition }) =>
    $hasIcon && $iconPosition === "right" ? "48px" : "16px"};

  width: 295px;
  height: 42px;

  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 424px;
    height: 52px;
  }
`;
