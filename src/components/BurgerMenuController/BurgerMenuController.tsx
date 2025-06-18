import { useAppSelector } from "../../hooks/useAppSelector";
import { selectIsBurgerMenuOpen } from "../../redux/ui/selectors";
import { toggleMenu } from "../../redux/ui/slice";
import SideMenu from "../SideMenu/SideMenu";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import css from "./BurgerMenuController.module.css";
import clsx from "clsx";

const BurgerMenuController = () => {
  const isBurgerMenuOpen = useAppSelector(selectIsBurgerMenuOpen);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      {isBurgerMenuOpen && (
        <div
          className={clsx(css["burger-menu_overlay"], {
            [css["burger-menu_overlay-open"]]: isBurgerMenuOpen,
          })}
          onClick={() => dispatch(toggleMenu())}
        />
      )}
      <div
        className={clsx(css["burger-menu"], {
          [css["burger-menu-open"]]: isBurgerMenuOpen,
          [css["burger-menu-close"]]: !isBurgerMenuOpen,
        })}
      >
        <SideMenu isOpen={isBurgerMenuOpen} isHomePage />
      </div>
      <div
        onClick={toggle}
        className="block bg-transparent cursor-pointer border-none w-8 h-8 xl:hidden"
      >
        <img
          src="/icons/burgerMenu.svg"
          alt="burger menu"
          className="w-8 h-8"
        />
      </div>
    </>
  );
};

export default BurgerMenuController;
