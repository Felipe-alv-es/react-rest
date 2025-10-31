import { Paper, InputBase, IconButton } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import { getSearchInputStyle, getSearchStyle } from "./Search.styles";

interface SearchProps {
  filters: {
    order: string;
    status: string;
    search: string;
  };
}

const Search = ({ filters }: SearchProps) => {
  return (
    <Paper
      component="form"
      sx={getSearchStyle()}
      elevation={0}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        sx={getSearchInputStyle()}
        placeholder="Search"
        value={filters.search}
        onChange={() => undefined}
      />
      <IconButton type="submit">
        <IoMdSearch />
      </IconButton>
    </Paper>
  );
};

export default Search;
