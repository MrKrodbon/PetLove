import styled from "styled-components";

export const ItemListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
