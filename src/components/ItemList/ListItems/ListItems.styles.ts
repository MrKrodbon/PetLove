import styled from "styled-components";
import { colors } from "../../../constants/colors/colors";
import { baseTextStyles } from "../../../common/styles";

export const NewsListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 359px;
  text-align: left;
`;

export const FriendsListItem = styled.li`
  flex-direction: column;
  width: 342px;
  height: 100%;
  text-align: left;
  border-radius: 16px;
  background-color: ${colors.WHITE_COLOR};
  padding: 12px 20px 40px 20px;
`;

export const ListItemWrapper = styled.div<{ isNewsPage?: boolean }>`
  display: ${({ isNewsPage }) => (isNewsPage ? "" : "flex")};
  align-items: center;
  width: 100%;
  height: ${({ isNewsPage }) => (isNewsPage ? "149px" : "")};
  gap: 20px;
`;

export const ListItemTextWrapper = styled.div<{ isNewsPage?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isNewsPage }) => (isNewsPage ? "center" : "end")};
  width: ${({ isNewsPage }) => (isNewsPage ? "100%" : "196px")};
  height: ${({ isNewsPage }) => (isNewsPage ? "149px" : "100%")};
  gap: 12px;
`;

export const ListItemImageWrapper = styled.div<{ isNewsPage?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ isNewsPage }) => (isNewsPage ? "100%" : "190px")};
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

export const ListItemParagraphSpan = styled.span`
  height: 18px;
  ${baseTextStyles}
  color: ${colors.GRAY_COLOR};
`;

export const ListItemParagraph = styled.p`
  height: 18px;
  width: 196px;
  ${baseTextStyles}
  color: ${colors.TEXT_COLOR};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListItemDescription = styled.p`
  ${baseTextStyles};
  color: ${colors.TEXT_COLOR};
`;

export const ListItemDate = styled.p`
  ${baseTextStyles};
  color: ${colors.GRAY_COLOR};
`;

export const ListItemTime = styled.p`
  ${baseTextStyles};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;

  width: 110px;
  height: 34px;

  background: ${colors.BUTTON_ACTION_COLOR};
  border-radius: 30px;

  color: ${colors.MAIN_COLOR};
`;
