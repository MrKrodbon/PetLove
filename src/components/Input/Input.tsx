import React from "react";
import s from "./Input.module.scss";
import clsx from "clsx";

export interface BaseInputProps {
  className?: string;
  iconSrc?: string;
  iconPosition?: "left" | "right";
  placeholder?: string;
  value?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<BaseInputProps> = ({
  iconSrc,
  iconPosition,
  placeholder,
  type,
}) => {
  const iconLeft = iconPosition === "left";
  const iconRight = iconPosition === "right";

  return (
    <div className="flex relative md:w-fit items-center">
      {iconSrc && (
        <img
          className={clsx(
            s.icon,
            iconLeft && s.iconLeft,
            iconRight && s.iconRight
          )}
          src={iconSrc}
        />
      )}
      <input
        className={clsx(s.search, {
          ["pl-12"]: iconLeft && !!iconSrc,
          ["pr-12"]: iconRight && !!iconSrc,
        })}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
