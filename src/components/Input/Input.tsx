import React from "react";
import s from "./Input.module.scss";
import clsx from "clsx";

export type InputVariant = "default" | "auth";

export interface BaseInputProps {
  icon?: string;
  iconPosition?: "left" | "right";
  placeholder?: string;
  value?: string;
  type?: React.HTMLInputTypeAttribute;
  children?: React.ReactNode;
  name: string;
  variant?: InputVariant;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export const Input: React.FC<BaseInputProps> = ({
  icon,
  iconPosition,
  placeholder,
  type,
  children,
  variant,
  onChange,
  readOnly = false,
  value,
  name,
  className,
}) => {
  const iconLeft = iconPosition === "left";
  const iconRight = iconPosition === "right";

  return (
    <div className="flex relative  items-center">
      {children && (
        <div
          className={clsx(
            s.icon,
            iconLeft && s.iconLeft,
            iconRight && s.iconRight
          )}
        >
          {children}
        </div>
      )}
      <input
        className={clsx(s.search, className, {
          ["pl-12"]: iconLeft && !!icon,
          ["pr-12"]: iconRight && !!icon,
          [s.auth]: variant === "auth",
        })}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
};
