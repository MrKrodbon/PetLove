import { PagionationButtonProps } from "../../../types/types";
import css from "./PaginationButton.module.scss";
import clsx from "clsx";

export const PaginationButton = ({
  isCurrentPage,
  label,
  onClick,
}: PagionationButtonProps) => {
  return (
    <button
      className={clsx(css["pagination-button"], {
        [css["pagination-button--pressed"]]: isCurrentPage,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
