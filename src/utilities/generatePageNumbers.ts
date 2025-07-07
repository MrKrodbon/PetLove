export const generatePageNumbers = (
  currentPage: number,
  totalPages: number
) => {
  const pages = [];

  //the max visible number is 3
  const maxVisible = Math.min(3, totalPages);

  //get the floor, for example 5 - 3 / 2 = 5 - 1
  let start = currentPage - Math.floor(maxVisible / 2);
  start = Math.max(start, 1);

  let end = start + maxVisible - 1;

  if (end > totalPages) {
    end = totalPages;
    start = currentPage - maxVisible + 1;
  }

  //generate page numbers start + 1
  for (let index = 0; index <= end - start; index++) {
    pages.push(start + index);
  }

  return pages;
};
