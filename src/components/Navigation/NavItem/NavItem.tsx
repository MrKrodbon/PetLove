import { NavLink } from "react-router-dom";
import css from "./NavItem.module.scss";
import React from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectIsHomePage } from "../../../redux/ui/selectors";
import clsx from "clsx";

interface NavItemProps {
  to: string;
  label: string;
}

const buildLinkClass = ({ isActive }) => {
  return isActive
    ? "text-blue-500 underline font-semibold"
    : "text-gray-700 hover:text-blue-500";
};

const NavItem = ({ to, label }: NavItemProps) => {
  const isHomePage = useAppSelector(selectIsHomePage);

  return (
    <NavLink to={to} className={buildLinkClass}>
      <button
        className={`${clsx(
          isHomePage && css["nav-item_home--press"],
          !isHomePage && css["nav-item--press"]
        )} w-32`}
      >
        {label}
      </button>
    </NavLink>
  );
};

export default React.memo(NavItem);
