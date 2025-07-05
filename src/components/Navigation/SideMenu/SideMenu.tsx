import s from "./SideMenu.module.scss";
import clsx from "clsx";

import IconClose from "@/assets/icons/close.svg?react";
import { useLocation } from "react-router-dom";
import AuthButtons from "@/components/Auth/AuthButtons/AuthButtons";
import { Button } from "@/components/Button/Button";
import { navLinks } from "@/constants/appLinks/appLinks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { closeMenu } from "@/redux/ui/slice";
import NavItem from "@/components/Navigation/NavItem/NavItem";

const SideMenu = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const handleCloseModal = () => {
    dispatch(closeMenu());
  };

  return (
    <div className={clsx(s.sideMenu, { [s.home]: isHomePage })}>
      <Button
        type="button"
        className="flex items-end"
        onClick={handleCloseModal}
      >
        <IconClose />
      </Button>
      <div
        className="flex flex-col gap-2.5 items-center"
        onClick={handleCloseModal}
      >
        {navLinks.map(({ path, label }) => {
          return <NavItem key={path} to={path} label={label} />;
        })}
      </div>
      <div
        className="flex flex-col  items-center gap-2 md:flex-row md:justify-center"
        onClick={handleCloseModal}
      >
        <AuthButtons />
      </div>
    </div>
  );
};

export default SideMenu;
