import { Box, Pagination } from "@mui/material";
import { getFooterStyle } from "./HomeFooter.styles";

const HomeFooter = () => {
  return (
    <Box sx={getFooterStyle}>
      <Pagination />
    </Box>
  );
};

export default HomeFooter;
