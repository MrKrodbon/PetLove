import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button<{
  $hasIcon: boolean;
}>`
  border-radius: 50%;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const Icon = styled.img`
  pointer-events: none;
  object-fit: contain;
`;
