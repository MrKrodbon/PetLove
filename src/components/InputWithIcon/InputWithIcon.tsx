import React from "react";
import { InputFieldProps } from "../../types/types";
import css from "./InputWithIcon.module.scss";
import clsx from "clsx";

export const InputWithIcon: React.FC<InputFieldProps> = ({
  iconSrc,
  iconPosition = "left",
}) => {
  const iconLeft = iconPosition === "left";
  const iconRight = iconPosition === "right";

  return (
    <div className=" flex relative md:w-fit items-center">
      {iconSrc && (
        <img
          className={clsx(
            css["input-icon"],
            iconLeft && css["input-icon_left"],
            iconRight && css["input-icon_right"]
          )}
          src={iconSrc}
          alt="search icon"
        />
      )}
      <input
        className={clsx(css["input-search"], {
          ["pl-12"]: iconLeft && !!iconSrc,
          ["pr-12"]: iconRight && !!iconSrc,
        })}
      />
    </div>
  );
};
