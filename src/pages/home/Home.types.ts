export interface CustomizedInputProps {
  filters: {
    order: string;
    status: string;
    search: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      order: string;
      status: string;
      search: string;
    }>
  >;
  handleFilterChange: (key: string, value: string) => void;
}

export interface SearchProps {
  filters: {
    order: string;
    status: string;
    search: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      order: string;
      status: string;
      search: string;
    }>
  >;
}
