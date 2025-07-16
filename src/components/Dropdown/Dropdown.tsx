import React, { useEffect, useRef, useState } from "react";
import s from "./DropDown.module.scss";
import { Input } from "../Input/Input";

interface DropdownProps<T> {
  filterOptions: T[];
  placeholder?: string;
  name: string;
  className?: string;
  icon?: React.ReactNode;
  readOnly?: boolean;
  renderItem: (item: T) => React.ReactElement;
  valueExtractor?: (item: T) => string;
  onResetValue?: () => void;
  onChange: (value: T) => void;
  onInput?: (e: React.InputEvent<HTMLInputElement>) => void;
}

function Dropdown<T>({
  filterOptions,
  name,
  icon,
  className,
  placeholder,
  readOnly = false,
  valueExtractor,
  renderItem,
  onResetValue,
  onChange,
  onInput,
}: DropdownProps<T>) {
  const [value, setValue] = useState<T | "">("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onSelectValueHandle = (value: T) => {
    setValue(value);
    onChange(value);
  };

  const resetFilterValueHandle = () => {
    if (onResetValue) {
      setValue("");
      onResetValue();
    }
  };

  const displayValue = (): string => {
    if (value !== "" && valueExtractor) {
      return valueExtractor(value);
    } else if (value !== "" && !valueExtractor) {
      return String(value);
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
    <div
      className={s.wrapper}
      onClick={() => setShowDropdown((prev) => !prev)}
      ref={dropdownRef}
    >
      <Input
        name={name}
        placeholder={placeholder}
        children={icon}
        value={displayValue()}
        onInput={onInput}
        iconPosition="right"
        className={className}
        readOnly={readOnly}
      />
      {showDropdown && (
        <ul className={s.showDropDown}>
          <li className={s.showAll} onClick={resetFilterValueHandle}>
            Show all
          </li>
          {filterOptions.map((item, i) => {
            return (
              <>
                <li key={i} onClick={() => onSelectValueHandle(item)}>
                  {renderItem(item)}
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
