import s from "./SideMenu.module.css";
import clsx from "clsx";

import IconClose from "@/assets/icons/close.svg";
import { useLocation } from "react-router-dom";
import AuthButtons from "@/components/Auth/AuthButtons/AuthButtons";
import { Button } from "@/components/Button/Button";
import { navLinks } from "@/constants/appLinks/appLinks";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { closeMenu } from "@/redux/ui/slice";
import NavItem from "../NavItem/NavItem";

interface SideMenuProps {
  isOpen: boolean;
}

const SideMenu = ({ isOpen = false }: SideMenuProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const handleCloseModal = () => {
    dispatch(closeMenu());
  };

  return (
    <div
      className={clsx(s.sideMenu, {
        [s.open]: isOpen,
        [s.close]: !isOpen,
        [s.home]: isHomePage,
      })}
    >
      <Button
        type="button"
        className="flex items-end"
        iconSrc={IconClose}
        onClick={handleCloseModal}
      />
      <div className="flex flex-col gap-2.5 items-center">
        {Object.values(navLinks).map((navItem) => {
          return (
            <NavItem key={navItem.to} to={navItem.to} label={navItem.label} />
          );
        })}
      </div>
      <div className="flex flex-col  items-center gap-2 md:flex-row md:justify-center">
        <AuthButtons />
      </div>
    </div>
  );
};

export default SideMenu;
