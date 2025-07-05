import { NavLink, useLocation } from "react-router-dom";
import s from "./NavItem.module.scss";
import React, { HTMLAttributeAnchorTarget } from "react";
import clsx from "clsx";
import { Button } from "@/components/Button/Button";

interface NavItemProps {
  to: string;
  label?: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  children?: React.ReactNode;
}

const NavItem = ({ to, label, className, children }: NavItemProps) => {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  return (
    <NavLink to={to} className={className}>
      {label?.length && (
        <Button
          className={`${clsx(s.nav, {
            [s.navHome]: isHomePage,
          })}   w-32`}
          label={label}
        />
      )}
      {children}
    </NavLink>
  );
};

export default React.memo(NavItem);
