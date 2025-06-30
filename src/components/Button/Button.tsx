import React from "react";
import s from "./Button.module.scss";
import clsx from "clsx";

type ButtonType = "submit" | "button" | "reset";
type Variant = "base" | "primary" | "secondary";

interface ButtonProps {
  type?: ButtonType;
  label?: string;
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  className,
  variant,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={clsx(s.button, className, {
        [s.primary]: variant === "primary",
        [s.secondary]: variant === "secondary",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
};
