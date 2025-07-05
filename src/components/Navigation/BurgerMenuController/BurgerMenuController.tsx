import { useAppSelector } from "@/hooks/useAppSelector";
import { selectIsBurgerMenuOpen } from "@/redux/ui/selectors";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import s from "./BurgerMenuController.module.scss";
import clsx from "clsx";
import { Button } from "../../Button/Button";
import { closeMenu, openMenu } from "@/redux/ui/slice";
import BurgerIcon from "@/assets/icons/burgerMenu.svg?react";
import SideMenu from "../SideMenu/SideMenu";

const BurgerMenuController = () => {
  const isBurgerMenuOpen = useAppSelector(selectIsBurgerMenuOpen);
  const dispatch = useAppDispatch();

  const closeBurgerMenu = () => dispatch(closeMenu());

  const openBurgerMenu = () => dispatch(openMenu());

  return (
    <>
      <div
        className={clsx(s.overlay, { [s.overlayVisible]: isBurgerMenuOpen })}
        onClick={closeBurgerMenu}
      />

      <div className={clsx(s.menu, { [s.menuOpen]: isBurgerMenuOpen })}>
        <SideMenu />
      </div>

      <Button
        type="button"
        onClick={openBurgerMenu}
        className="border-none  object-contain  bg-transparent cursor-pointer xl:hidden"
      >
        {<BurgerIcon />}
      </Button>
    </>
  );
};

export default BurgerMenuController;
