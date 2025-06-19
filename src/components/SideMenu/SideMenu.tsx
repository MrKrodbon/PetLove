import { HeaderProps } from "../../types/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleMenu } from "../../redux/ui/slice";
import { navLinks } from "../../constants/appLinks/appLinks";
import NavItem from "../Navigation/NavItem/NavItem";
import css from "./SideMenu.module.css";
import clsx from "clsx";
import AuthButtons from "../Navigation/AuthButtons/AuthButtons";

const SideMenu = ({ isOpen, isHomePage = false }: HeaderProps) => {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={clsx(css["side-menu"], {
        [css.open]: isOpen,
        [css.close]: !isOpen,
        [css.home]: isHomePage,
      })}
    >
      <div className="flex items-end" onClick={handleCloseModal}>
        <img src="/public/icons/close.svg" />
      </div>
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
