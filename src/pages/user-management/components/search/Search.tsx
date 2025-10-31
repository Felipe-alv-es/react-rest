import { Paper, InputBase, IconButton, useTheme } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import { getSearchInputStyle, getSearchStyle } from "./Search.styles";
import { SearchProps } from "pages/user-management/UserManagement.types";

export const Search = ({ filters, setFilters }: SearchProps) => {
  const theme = useTheme();

  return (
    <Paper
      component="form"
      sx={getSearchStyle(theme)}
      elevation={0}
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="user-search" style={{ display: "none" }}>
        Buscar usuário
      </label>
      <InputBase
        id="user-search"
        sx={getSearchInputStyle(theme)}
        placeholder="Buscar usuário..."
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
        inputProps={{
          "aria-label": "Buscar usuário",
        }}
      />
      <IconButton type="submit" aria-label="Pesquisar usuário">
        <IoMdSearch />
      </IconButton>
    </Paper>
  );
};
