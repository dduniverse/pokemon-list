export const getPageNumbers = ({currentPage, totalPages}) => {
  const pages = [];
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  if (startPage > 1) {
    pages.push(1); // 첫 페이지
    if (startPage > 2) {
      pages.push("..."); // 축약 표시
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push("...");
    }
    pages.push(totalPages); // 마지막 페이지
  }

  return pages;
};