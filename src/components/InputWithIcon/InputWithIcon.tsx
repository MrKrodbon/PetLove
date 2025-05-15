import React from "react";
import { Icon, StyledInput, Wrapper } from "./InputWithIcon.styled";
import { InputFieldProps } from "../../types/types";

export const InputWithIcon: React.FC<InputFieldProps> = ({
  iconSrc,
  iconPosition = "left",
  customWidth,
  ...props
}) => {
  return (
    <Wrapper>
      {iconSrc && <Icon $position={iconPosition} src={iconSrc} alt="icon" />}
      <StyledInput
        $hasIcon={!!iconSrc}
        $iconPosition={iconPosition}
        customWidth={customWidth}
        {...props}
      />
    </Wrapper>
  );
};
