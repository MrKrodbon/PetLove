import { PagionationButtonProps } from "../../../types/types";
import { PaginationButton } from "./PaginationButton.styles";

export const Button = ({ isCurrentPage }: PagionationButtonProps) => {
  return <PaginationButton isCurrentPage={isCurrentPage} />;
};
