import { User } from "context/user-context/types";

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
  addUser: (newUser: User) => void;
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
