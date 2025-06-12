import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { BurgerMenu } from "../../layouts/Header/Header.styles";
import { selectIsBurgerMenuOpen } from "../../redux/ui/selectors";
import { toggleMenu } from "../../redux/ui/slice";
import SideMenu from "../SideMenu/SideMenu";
import { Overlay } from "../SideMenu/SideMenu.styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const BurgerMenuController = () => {
  const isBurgerMenuOpen = useAppSelector(selectIsBurgerMenuOpen);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      {isBurgerMenuOpen && (
        <Overlay
          isOpen={isBurgerMenuOpen}
          onClick={() => dispatch(toggleMenu())}
        />
      )}
      <SideMenu isOpen={isBurgerMenuOpen} isHomePage />;
      <BurgerMenu onClick={toggle}>
        <img
          src="/icons/burgerMenu.svg"
          alt="burger menu"
          className="w-8 h-8"
        />
      </BurgerMenu>
    </>
  );
};

export default BurgerMenuController;
