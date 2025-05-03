import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;
