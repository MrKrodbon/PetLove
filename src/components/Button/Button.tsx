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
  icon?: React.ReactElement | null;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  className,
  variant,
  icon,
  iconPosition,
  disabled,
  onClick,
}) => {
  const hasContent = !!label || !!children;
  const renderLabel = label ?? children;
  return (
    <button
      className={clsx(s.button, className, {
        [s.primary]: variant === "primary",
        [s.secondary]: variant === "secondary",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <div className={s.iconLeft}>{icon}</div>
      )}
      {hasContent && renderLabel}
      {icon && iconPosition === "right" && (
        <div className={s.iconRight}>{icon}</div>
      )}
    </button>
  );
};
