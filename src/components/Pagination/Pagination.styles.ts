import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 334px;
  heigth: 40px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
  }
`;
