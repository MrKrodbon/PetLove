import React, { useEffect, useRef, useState } from "react";
import s from "./Dropdown.module.scss";

interface DropdownProps<T> {
  filterOptions: T[];
  onSelect: (value: T) => void;
  renderItem: (item: T) => React.ReactElement;
  resetFilterValue?: () => void;
}

function Dropdown<T>({
  filterOptions,
  onSelect,
  renderItem,
  resetFilterValue,
}: DropdownProps<T>) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onSelectValueHandle = (value: T) => {
    onSelect(value);
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
      <ul className={s.showDropDown}>
        <li className={s.showAll} onClick={resetFilterValue}>
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
    </div>
  );
}

export default Dropdown;
