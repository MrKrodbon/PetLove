import { InputWithIcon } from "../InputWithIcon/InputWithIcon";
import { InputFieldProps } from "../../types/types";

const FilterField = ({
  iconPosition,
  iconSrc,
  onInput,
  placeholder,
  value,
  className,
}: InputFieldProps) => {
  return (
    <InputWithIcon
      iconPosition={iconPosition}
      iconSrc={iconSrc}
      onInput={onInput}
      placeholder={placeholder}
      value={value}
      className={className}
    />
  );
};

export default FilterField;
