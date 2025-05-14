export const generatePageNumbers = (
  currentPage: number,
  totalPages: number
) => {
  if (currentPage === 1) return [1, 2, 3];
  if (currentPage === totalPages)
    return [totalPages - 2, totalPages - 1, totalPages];

  if (currentPage > totalPages) return;

  return [currentPage - 1, currentPage, currentPage + 1];
};
