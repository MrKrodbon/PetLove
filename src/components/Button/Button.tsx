import React from "react";
import s from "./Button.module.css";
import clsx from "clsx";

type ButtonType = "submit" | "button" | "reset";

interface ButtonProps {
  type?: ButtonType;
  label?: string;
  iconSrc?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  iconSrc,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={clsx(s.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {iconSrc ? <img src={iconSrc} /> : label}
    </button>
  );
};
