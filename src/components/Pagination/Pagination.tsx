import { setNewPage } from "../../redux/news/slice";
import { generatePageNumbers } from "@/utilities/generatePageNumbers";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import s from "./Pagination.module.scss";
import ArrowLeft from "@/assets/icons/angle-small-left.svg";
import ArrowRight from "@/assets/icons/angle-small-right.svg";
import DoubleArrowLeft from "@/assets/icons/angle-small-left-double.svg";
import DoubleArrowRight from "@/assets/icons/angle-small-right-double.svg";
import { Button } from "../Button/Button";
import { useMemo } from "react";
import clsx from "clsx";

interface PaginationListProps {
  totalPages?: number;
  currentPage?: number;
}

const Pagination = ({
  totalPages = 0,
  currentPage = 1,
}: PaginationListProps) => {
  const dispatch = useAppDispatch();

  const pageNumbers = useMemo(
    () => generatePageNumbers(currentPage || 1, totalPages || 1),
    [currentPage, totalPages]
  );

  const onPageChangeHandle = (newPage: number) => dispatch(setNewPage(newPage));

  const ArrowButton = ({ icon, delta }: { icon: string; delta: number }) => {
    return (
      <Button
        iconSrc={icon}
        className={s.button}
        onClick={() => onPageChangeHandle(currentPage + delta)}
        disabled={currentPage + delta < 1 || currentPage + delta > totalPages}
      />
    );
  };

  return (
    <div className={s.pagination}>
      <ArrowButton icon={DoubleArrowLeft} delta={-5} />
      <ArrowButton icon={ArrowLeft} delta={-1} />
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
      <ArrowButton icon={ArrowRight} delta={1} />
      <ArrowButton icon={DoubleArrowRight} delta={5} />
    </div>
  );
};

export default Pagination;
