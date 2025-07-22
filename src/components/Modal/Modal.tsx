import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.scss";
import { Button } from "../Button/Button";
import CloseIcon from "@/assets/icons/close.svg?react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root")!;
  const handleEsc = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose, isOpen, handleEsc]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      aria-modal="true"
      role="dialog"
      className={s.overlay}
      onClick={onClose} // закриваємо по кліку на фон
    >
      <div
        className={s.content}
        role="document"
        onClick={(e) => e.stopPropagation()} // запобігаємо закриттю при натиску в середині
      >
        {children}
        <Button
          onClick={onClose}
          className={s.close}
          icon={<CloseIcon width={24} height={24} />}
        />
      </div>
    </div>,
    modalRoot
  );
};
