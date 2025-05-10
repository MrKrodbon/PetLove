import React from "react";
import { Icon, StyledButton, Wrapper } from "./ButtonWithIcon.styles";

type Props = {
  iconSrc?: string;
};

export const ButtonWithIcon: React.FC<Props> = ({ iconSrc }) => {
  return (
    <Wrapper>
      <StyledButton $hasIcon={!!iconSrc}>
        {iconSrc && <Icon src={iconSrc} alt="icon" />}
      </StyledButton>
    </Wrapper>
  );
};
