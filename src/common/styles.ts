import styled from "styled-components";
import { sizes } from "./sizes";

export const Button = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  gap: ${sizes.medium}px;

  height: 50px;

  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  gap: 10px;

  width: 424px;
  height: 52px;

  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
