import React from "react";
import { Icon, StyledButton, Wrapper } from "./ButtonWithIcon.styles";

type Props = {
  iconSrc?: string;
  onClick?: () => void;
};

export const ButtonWithIcon: React.FC<Props> = ({ iconSrc, onClick }) => {
  return (
    <Wrapper>
      <StyledButton $hasIcon={!!iconSrc} onClick={onClick}>
        {iconSrc && <Icon src={iconSrc} alt="icon" />}
      </StyledButton>
    </Wrapper>
  );
};
