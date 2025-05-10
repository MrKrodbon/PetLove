import styled from "styled-components";
import { colors } from "../../../constants/colors/colors";

export const NewsListItem = styled.li`
  flex-direction: column;
  width: 335px;
  height: 359px;
  text-align: left;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  hight: 149px;
  gap: 20px;
`;

export const ListItemTextWrapper = styled.div`
  width: 100%;
  hight: 149px;
  gap: 12px;
`;

export const ListItemImageWrapper = styled.div`
  width: 100%;
  height: 190px;
  overflow: hidden;
  border-radius: 15px;
`;

export const ListItemTitle = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: ${colors.TEXT_COLOR};
`;

export const ListItemDescription = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: ${colors.TEXT_COLOR};
`;

export const ListItemDate = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: ${colors.GRAY_COLOR};
`;
