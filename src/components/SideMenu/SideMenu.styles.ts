import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
import { HeaderProps } from "../../types/types";

export const SideMenuLayout = styled.div<HeaderProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  width: 218px;
  height: 100%;
  background-color: ${({ isHomePage }) =>
    isHomePage ? `${colors.WHITE_COLOR}` : `${colors.MAIN_COLOR}`};
  color: white;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 1000;
  padding: 2rem 1rem;

  @media screen and (min-width: 768px) {
    width: 374px;
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;
