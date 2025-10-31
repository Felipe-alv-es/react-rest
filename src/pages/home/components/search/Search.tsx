import { Paper, InputBase, IconButton } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import { getSearchInputStyle, getSearchStyle } from "./Search.styles";
import { SearchProps } from "pages/home/Home.types";

export const Search = ({ filters, setFilters }: SearchProps) => {
  return (
    <Paper
      component="form"
      sx={getSearchStyle()}
      elevation={0}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        sx={getSearchInputStyle()}
        placeholder="Buscar usuário..."
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
      />
      <IconButton type="submit">
        <IoMdSearch />
      </IconButton>
    </Paper>
  );
};
