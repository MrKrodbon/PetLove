import styled from "styled-components";
import { colors } from "../../constants/colors/colors";

export const HomePageUpperBlock = styled.div`
  border-radius: 30px;
  display: flex;
  flex-direction: column;

  background-color: ${colors.MAIN_COLOR};

  width: 320px;

  @media (min-width: 768px) {
    width: 704px;
  }
  @media (min-width: 1280px) {
    width: 1216px;
  }
`;

export const HomePageBottomBlock = styled.div`
  display: flex;
  width: 320px;
  height: 496px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("/images/MainImage.jpg");

  @media (min-width: 798px) {
    background-image: url("/images/MainImageTablet.jpg");
    flex-direction: row;
    justify-content: end;
    width: 704px;
    height: 496px;
  }
  @media (min-width: 1200px) {
    background-image: url("/images/MainImageDesktop.jpg");
    width: 1216px;
    height: 384px;
  }
`;

export const MainTitle = styled.p`
  margin-top: 60px;
  text-align: left;
  height: 144px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.03em;

  color: ${colors.WHITE_COLOR};

  flex: none;
  order: 0;
  flex-grow: 0;

  /* Tablet */
  @media (min-width: 768px) {
    width: 640px;
    margin-top: 112px;
    font-size: 50px;
  }

  /* Desktop */
  @media (min-width: 1280px) {
    width: 760px;
    margin-top: 123px;
    font-size: 80px;
  }
`;

export const SubTitle = styled.p`
  margin-top: 24px;
  height: 54px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: ${colors.WHITE_COLOR};

  order: 1;
  flex-grow: 0;

  /* Tablet */
  @media (min-width: 798px) {
    width: 255px;
    margin-top: 32px;
  }
  /* Desktop */
  @media (min-width: 1280px) {
    width: 255px;
    margin-top: 32px;
  }
`;

export const FlexSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  /* Tablet */
  @media (min-width: 798px) {
    padding-bottom: 44px;
  }

  /* Desktop */
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 32px;
  }
`;
