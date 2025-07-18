import React, { useEffect, useRef, useState } from "react";
import { Input } from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";

interface SelectProps<T> {
  name: string;
  placeholder?: string;
  filterOptions: T[];
  value?: string;
  className?: string;
  icon?: React.ReactNode;
  readOnly?: boolean;
  renderItem: (item: T) => React.ReactElement;
  valueExtractor?: (item: T) => string;
  onResetValue?: () => void;
  onSelect: (value: T) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.InputEvent<HTMLInputElement>) => void;
}

function Select<T>({
  name,
  placeholder,
  filterOptions,
  value,
  icon,
  className,
  readOnly = false,
  valueExtractor,
  renderItem,
  onResetValue,
  onSelect,
  onChange,
}: SelectProps<T>) {
  const [selectedValue, setSelectedValue] = useState<T | "">("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onSelectValueHandle = (value: T) => {
    setSelectedValue(value);
    onSelect(value);
  };

  const resetFilterValueHandle = () => {
    if (onResetValue) {
      setSelectedValue("");
      onResetValue();
    }
  };

  const displayValue = (): string => {
    if (selectedValue !== "" && valueExtractor) {
      return valueExtractor(selectedValue);
    } else if (selectedValue !== "" && !valueExtractor) {
      return String(selectedValue);
    }
    return "";
  };

  useEffect(() => {
    const onOutsideClickHandle = (e: MouseEvent) => {
      if (showDropdown && !dropdownRef.current?.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", onOutsideClickHandle);
    return () =>
      document.removeEventListener("mousedown", onOutsideClickHandle);
  }, [showDropdown]);

  return (
    <div onClick={() => setShowDropdown((prev) => !prev)} ref={dropdownRef}>
      <Input
        name={name}
        placeholder={placeholder}
        children={icon}
        value={value ?? displayValue()}
        onChange={onChange}
        iconPosition="right"
        className={className}
        readOnly={readOnly}
      />
      {showDropdown && (
        <Dropdown
          filterOptions={filterOptions}
          renderItem={renderItem}
          resetFilterValue={resetFilterValueHandle}
          onSelect={onSelectValueHandle}
        />
      )}
    </div>
  );
}

export default Select;
