import { ITEMS_PER_PAGE } from "@/types/constants";
import { getPageNumbers } from "@/utils/getPageNumbers";

function Pagination({ currentPage, onPageChange, totalItems }) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const pageNumbers = getPageNumbers({currentPage, totalPages});

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        className="px-4 py-2 border rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumbers.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            className={`px-3 py-1 rounded border ${
              currentPage === page
                ? "bg-amber-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-1 text-gray-500">
            ...
          </span>
        )
      )}
      <button
        className="px-4 py-2 border rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;