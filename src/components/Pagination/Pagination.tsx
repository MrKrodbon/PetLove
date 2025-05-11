import { PaginationWrapper } from "./Pagination.styles";
import ArrowButton from "./ArrowButton/ArrowButton";
import { PaginationButton } from "./Button/PaginationButton.styles";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setNewPage } from "../../redux/news/slice";
import { StoreType } from "../../redux/store";

const Pagination = () => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((state: StoreType) => state.news.page);

  const totalPages = useAppSelector(
    (state: StoreType) => state.news.totalPages
  );

  const onPageChangeHandle = (newPage: number) => {
    dispatch(setNewPage(newPage));
  };

  return (
    <PaginationWrapper>
      <ArrowButton iconSrc="/public/icons/angle-small-left-double.svg" />
      <ArrowButton iconSrc="/public/icons/angle-small-left.svg" />
      <ul className="flex flex-row gap-1">
        {Array.from({ length: 3 }, (_, i) => {
          const pageNumber = i + 1;
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
      <ArrowButton iconSrc="/public/icons/angle-small-right.svg" />
      <ArrowButton iconSrc="/public/icons/angle-small-right-double.svg" />
    </PaginationWrapper>
  );
};

export default Pagination;
