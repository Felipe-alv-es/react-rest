import { Box, Pagination } from "@mui/material";
import { getFooterStyle } from "./HomeFooter.styles";

interface HomeFooterProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const HomeFooter = ({
  totalPages,
  currentPage,
  handlePageChange,
}: HomeFooterProps) => {
  return (
    <Box sx={getFooterStyle}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "gray",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#464646",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#464646",
            },
          },
        }}
        aria-label="Paginação de usuários"
      />
    </Box>
  );
};

export default HomeFooter;
