import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
import { fonts } from "../../constants/fonts/fonts";

export const NotFoundImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1216px;
  height: 654px;

  background: #f6b83d;
  border-radius: 60px;
`;

export const HomePageButton = styled.button`
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

export const NotFoundText = styled.p`
  width: 322px;
  height: 28px;

  font-family: ${fonts.ManropeExtraBold};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.03em;

  color: ${colors.WHITE_COLOR};
`;
