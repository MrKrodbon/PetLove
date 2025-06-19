import React from "react";
import { setSearchValue } from "../../redux/news/slice";
import { InputWithIcon } from "../InputWithIcon/InputWithIcon";
import { InputFieldProps } from "../../types/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const SearchField = ({ placeholder, iconPosition }: InputFieldProps) => {
  const dispatch = useAppDispatch();
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <InputWithIcon
      iconSrc="/icons/search.svg"
      iconPosition={iconPosition}
      placeholder={placeholder}
      onInput={onChangeHandle}
    />
  );
};

export default SearchField;
