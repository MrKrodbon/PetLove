import React from "react";

interface WrapperWithIconProps {
  icon: React.ReactElement;
  children?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const WrapperWithIcon = ({
  icon,
  iconPosition,
  children,
}: WrapperWithIconProps) => {
  const iconLeft = iconPosition === "left";
  const iconRight = iconPosition === "right";

  return (
    <>
      {iconLeft && <div className="icon-left">{icon}</div>}
      {children}
      {iconRight && <div className="icon-right">{icon}</div>}
    </>
  );
};

export default WrapperWithIcon;
