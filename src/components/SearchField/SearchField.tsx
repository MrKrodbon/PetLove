import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { setNewPage, setSearchValue } from "../../redux/news/slice";
import { InputWithIcon } from "../InputWithIcon/InputWithIcon";

const SearchField = () => {
  const dispatch = useAppDispatch();
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <InputWithIcon
      iconSrc="/public/icons/search.svg"
      iconPosition="right"
      placeholder="Search"
      onInput={onChangeHandle}
    />
  );
};

export default SearchField;
