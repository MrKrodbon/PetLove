import styled from "styled-components";

export const NewsContainer = styled.div<{ isFlexChange?: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 335px;
  min-height: 500px;
  height: auto;
  overflow: hidden;
  gap: 40px;
  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 44px;
  }

  @media screen and (min-width: 1280px) {
    width: 1153px;
    flex-direction: ${({ isFlexChange }) => (isFlexChange ? "column" : "row")};
    gap: 40px;
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
