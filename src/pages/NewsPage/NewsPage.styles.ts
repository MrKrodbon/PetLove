import styled from "styled-components";
import { fonts } from "../../constants/fonts/fonts";
import { colors } from "../../constants/colors/colors";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 335px;
  min-height: 500px;
  heigth: auto;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1153px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SearchFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;
export const HeaderWrapper = styled.div`
  margin-bottom: 60px;
`;

export const NewsTitle = styled.p`
  font-family: "Manrope";
  font-size: 700;
  font-style: normal;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.03em;

  color: ${colors.TEXT_COLOR};

  text-align: left;
  margin-bottom: 20px;
`;
