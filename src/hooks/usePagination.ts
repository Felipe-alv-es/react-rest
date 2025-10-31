import { useState, useMemo } from "react";

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage?: number;
}

export function usePagination<T>({
  data,
  itemsPerPage = 10,
}: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data, itemsPerPage]
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(
    () => data.slice(indexOfFirstItem, indexOfLastItem),
    [data, indexOfFirstItem, indexOfLastItem]
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const resetPage = () => setCurrentPage(1);

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
    resetPage,
  };
}
