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
  sortUsers: (mode: "asc" | "desc" | "alph") => void;
  refresh: () => Promise<void>;
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
