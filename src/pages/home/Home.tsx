import HomeFooter from "./components/home-footer/HomeFooter";
import { Box } from "@mui/material";
import { getHomeStyle } from "./Home.styles";
import { HomeList, HomeTitle } from "./components/Index";
import { useUsers } from "context/UserContext";
import { CustomizedInputBase } from "./components/home-filter/HomeFilter";

const Home = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Carregando usuários…</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <Box sx={getHomeStyle}>
      <HomeTitle
        title="User Management"
        description="Manage all users in this place, create, edit, and delete them as needed."
      />
      <CustomizedInputBase />
      <HomeList users={users} />
      <HomeFooter />
    </Box>
  );
};

export default Home;
