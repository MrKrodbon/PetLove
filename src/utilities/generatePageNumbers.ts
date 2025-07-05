export const generatePageNumbers = (
  currentPage: number,
  totalPages: number
) => {
  if (currentPage === totalPages) return [currentPage];

  if (currentPage > totalPages) return;

  return [currentPage, currentPage + 1, currentPage + 2];
};
