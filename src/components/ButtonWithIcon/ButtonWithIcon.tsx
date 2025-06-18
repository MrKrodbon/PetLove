import React from "react";

type Props = {
  iconSrc?: string;
  onClick?: () => void;
};

export const ButtonWithIcon: React.FC<Props> = ({ iconSrc, onClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="rounded-[50%] p-0 border-none bg-transparent"
        onClick={onClick}
      >
        {iconSrc && (
          <img
            className="pointer-events-none object-contain"
            src={iconSrc}
            alt="icon"
          />
        )}
      </button>
    </div>
  );
};
