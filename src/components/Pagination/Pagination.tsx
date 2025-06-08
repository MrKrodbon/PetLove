import { PaginationWrapper } from "./Pagination.styles";
import ArrowButton from "./ArrowButton/ArrowButton";
import { PaginationButton } from "./Button/PaginationButton.styles";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setNewPage } from "../../redux/news/slice";
import { StoreType } from "../../redux/store";
import { useGetNewsQuery, useGetPetsQuery } from "../../redux/news/operations";
import { generatePageNumbers } from "../../utilities/generatePageNumbers";
import { selectCurrentPage } from "../../redux/news/selectors";
import { PaginationListProps } from "../../types/types";

const Pagination = ({ paginationList, currentPage }: PaginationListProps) => {
  const dispatch = useAppDispatch();

  const totalPages = paginationList?.totalPages || 1;
  //Треба зробити універсальним максимальну кількість сторінок
  const pageNumbers = generatePageNumbers(currentPage || 1, totalPages);

  const onPageChangeHandle = (newPage: number) => {
    if (newPage <= totalPages && newPage >= 1) {
      dispatch(setNewPage(newPage));
    } else if (newPage < 1) {
      alert("You are in the first page");
    } else if (newPage >= totalPages) {
      alert("You are in the last page");
    } else {
      console.log(newPage);
      alert("Something went wrong");
    }
  };

  return (
    <PaginationWrapper>
      <ArrowButton
        iconSrc="/public/icons/angle-small-left-double.svg"
        onClick={() => {
          onPageChangeHandle(currentPage - 5);
        }}
      />
      <ArrowButton
        iconSrc="/public/icons/angle-small-left.svg"
        onClick={() => {
          onPageChangeHandle(currentPage - 1);
        }}
      />
      <ul className="flex flex-row gap-1">
        {pageNumbers?.map((pageNumber) => {
          return (
            <PaginationButton
              isCurrentPage={pageNumber === currentPage}
              onClick={() => {
                onPageChangeHandle(pageNumber);
              }}
            >
              {pageNumber}
            </PaginationButton>
          );
        })}
      </ul>
      <ArrowButton
        iconSrc="/public/icons/angle-small-right.svg"
        onClick={() => {
          onPageChangeHandle(currentPage + 1);
        }}
      />
      <ArrowButton
        iconSrc="/public/icons/angle-small-right-double.svg"
        onClick={() => {
          onPageChangeHandle(currentPage + 5);
        }}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
