import styled from "styled-components";

export const NewsContainer = styled.div<{ isFlexChange?: boolean }>`
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
    flex-direction: ${({ isFlexChange }) => (isFlexChange ? "column" : "row")};
    justify-content: space-between;
    align-items: ${({ isFlexChange }) => (isFlexChange ? "start" : "end")};
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
