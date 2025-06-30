import { generatePageNumbers } from "@/utilities/generatePageNumbers";
import s from "./Pagination.module.scss";
import ArrowLeft from "@/assets/icons/angle-small-left.svg?react";
import ArrowRight from "@/assets/icons/angle-small-right.svg?react";
import DoubleArrowLeft from "@/assets/icons/angle-small-left-double.svg?react";
import DoubleArrowRight from "@/assets/icons/angle-small-right-double.svg?react";
import { Button } from "../Button/Button";
import React, { useMemo } from "react";
import clsx from "clsx";

interface PaginationListProps {
  totalPages?: number;
  currentPage?: number;
  onPageChange: (currentPage: number) => void;
}

const Pagination = ({
  totalPages = 0,
  currentPage = 1,
  onPageChange,
}: PaginationListProps) => {
  const pageNumbers = useMemo(
    () => generatePageNumbers(currentPage || 1, totalPages || 1),
    [currentPage, totalPages]
  );

  const onPageChangeHandle = (newPage: number) => onPageChange(newPage);

  const ArrowButton = ({
    children,
    delta,
  }: {
    children: React.ReactNode;
    delta: number;
  }) => {
    return (
      <Button
        className={s.button}
        onClick={() => onPageChangeHandle(currentPage + delta)}
        disabled={currentPage + delta < 1 || currentPage + delta > totalPages}
      >
        {children}
      </Button>
    );
  };

  return (
    <div className={s.pagination}>
      <ArrowButton delta={-5}>
        <DoubleArrowLeft className={s.icon} />
      </ArrowButton>

      <ArrowButton delta={-1}>
        <ArrowLeft className={s.icon} />
      </ArrowButton>
      <ul className="flex flex-row gap-1">
        {pageNumbers?.map((pageNumber) => {
          return (
            <Button
              key={pageNumber}
              className={clsx([s.button], {
                [s.currentPage]: pageNumber === currentPage,
              })}
              onClick={() => onPageChangeHandle(pageNumber)}
              label={pageNumber.toString() || ""}
            />
          );
        })}
      </ul>
      <ArrowButton delta={1}>
        <ArrowRight className={s.icon} />
      </ArrowButton>
      <ArrowButton delta={5}>
        <DoubleArrowRight className={s.icon} />
      </ArrowButton>
    </div>
  );
};

export default Pagination;
