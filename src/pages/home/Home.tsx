import { Box, Pagination } from "@mui/material";
import { getHomeStyle } from "./Home.styles";
import { HomeList, HomeTitle } from "./components/Index";

const Home = () => {
  return (
    <Box sx={getHomeStyle}>
      <HomeTitle
        title="User Management"
        description="Manage all users in this place, create, edit, and delete them as needed."
      />
      <HomeList />
      <Box
        sx={{
          padding: "32px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Pagination />
      </Box>
    </Box>
  );
};

export default Home;
