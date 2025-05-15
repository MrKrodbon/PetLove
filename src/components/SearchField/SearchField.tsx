import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { setNewPage, setSearchValue } from "../../redux/news/slice";
import { InputWithIcon } from "../InputWithIcon/InputWithIcon";
import { InputFieldProps } from "../../types/types";

const SearchField = ({
  placeholder,
  iconPosition = "right",
  customWidth,
}: InputFieldProps) => {
  const dispatch = useAppDispatch();
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <InputWithIcon
      iconSrc="/public/icons/search.svg"
      iconPosition={iconPosition}
      placeholder={placeholder}
      onInput={onChangeHandle}
      сustomWidth={customWidth}
    />
  );
};

export default SearchField;
