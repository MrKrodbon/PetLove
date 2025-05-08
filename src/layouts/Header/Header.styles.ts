import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
import { AuthNavigationProps } from "../../types/types";

export const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 18px 0;

  @media (min-width: 769px) {
    padding: 27px 0;
  }
  @media (min-width: 1280px) {
    padding: 44px 0;
  }
`;

export const HeaderNavigation = styled.nav`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const AuthNavigation = styled.nav<AuthNavigationProps>`
  display: ${({ isMobileMenu }) => (isMobileMenu ? "flex" : "none")};

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 35px;
  gap: 10px;
  color: ${colors.WHITE_COLOR};

  height: 50px;

  background: ${colors.MAIN_COLOR};
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
  color: ${colors.MAIN_COLOR};

  height: 50px;

  background: ${colors.BUTTON_ACTION_COLOR};
  border-radius: 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const BurgerMenu = styled.div`
  display: block;
  background-color: transaprent;
  cursor: pointer;
  border: none;
  width: 32px;
  height: 32px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const UserName = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
