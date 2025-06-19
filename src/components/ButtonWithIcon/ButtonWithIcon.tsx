import React from "react";
import css from "./ButtonWithIcon.module.css";

type Props = {
  iconSrc?: string;
  onClick?: () => void;
};

export const ButtonWithIcon: React.FC<Props> = ({ iconSrc, onClick }) => {
  return (
    <div className="flex justify-center items-center ">
      <button className={css.button} onClick={onClick}>
        {iconSrc && (
          <img
            className="pointer-events-none object-contain "
            src={iconSrc}
            alt="icon"
          />
        )}
      </button>
    </div>
  );
};
