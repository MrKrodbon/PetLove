import React from "react";
import { Icon, StyledInput, Wrapper } from "./InputWithIcon.styled";

type Props = {
  iconSrc?: string;
  iconPosition?: "left" | "right";
  placeholder?: string;
  value?: string;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputWithIcon: React.FC<Props> = ({
  iconSrc,
  iconPosition = "left",
  ...props
}) => {
  return (
    <Wrapper>
      {iconSrc && <Icon $position={iconPosition} src={iconSrc} alt="icon" />}
      <StyledInput
        $hasIcon={!!iconSrc}
        $iconPosition={iconPosition}
        {...props}
      />
    </Wrapper>
  );
};
