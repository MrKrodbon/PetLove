import { PaginationWrapper } from "./Pagination.styles";
import ArrowButton from "./ArrowButton/ArrowButton";
import { PaginationButton } from "./Button/PaginationButton.styles";

const Pagination = () => {
  return (
    <PaginationWrapper>
      <ArrowButton iconSrc="/public/icons/angle-small-left-double.svg" />
      <ArrowButton iconSrc="/public/icons/angle-small-left.svg" />
      <ul className="flex flex-row gap-1">
        <PaginationButton isCurrentPage>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
      </ul>
      <ArrowButton iconSrc="/public/icons/angle-small-right.svg" />
      <ArrowButton iconSrc="/public/icons/angle-small-right-double.svg" />
    </PaginationWrapper>
  );
};

export default Pagination;
