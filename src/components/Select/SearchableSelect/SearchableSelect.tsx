import React from "react";
import Select from "../Select";

interface SearchableSelectProps<T> {
  name: string;
  placeholder?: string;
  filterOptions: T[];
  icon?: React.ReactNode;
  value?: string;
  className?: string;
  readOnly?: boolean;
  renderItem: (item: T) => React.ReactElement;
  valueExtractor?: (item: T) => string;
  onResetValue?: () => void;
  onSelect: (value: T) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchableSelect<T>({
  name,
  placeholder,
  value,
  filterOptions,
  icon,
  readOnly = false,
  renderItem,
  onSelect,
  onChange,
  valueExtractor,
  onResetValue,
}: SearchableSelectProps<T>) {
  return (
    <Select
      name={name}
      placeholder={placeholder}
      filterOptions={filterOptions}
      icon={icon}
      value={value}
      renderItem={renderItem}
      onSelect={onSelect}
      onChange={onChange}
      valueExtractor={valueExtractor}
      onResetValue={onResetValue}
      readOnly={readOnly}
    />
  );
}

export default SearchableSelect;
