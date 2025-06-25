import { useAppSelector } from "@/hooks/useAppSelector";
import { selectIsBurgerMenuOpen } from "@/redux/ui/selectors";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import s from "./BurgerMenuController.module.css";
import clsx from "clsx";
import { Button } from "../../Button/Button";
import { closeMenu, openMenu } from "@/redux/ui/slice";
import BurgerIcon from "@/assets/icons/burgerMenu.svg";
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
        <SideMenu isOpen={isBurgerMenuOpen} />
      </div>

      <Button
        type="button"
        onClick={openBurgerMenu}
        iconSrc={BurgerIcon}
        className="border-none  object-contain block bg-transparent cursor-pointer w-8 h-8 xl:hidden"
      />
    </>
  );
};

export default BurgerMenuController;
