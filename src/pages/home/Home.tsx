import HomeFooter from "./components/home-footer/HomeFooter";
import { Box } from "@mui/material";
import { getHomeStyle } from "./Home.styles";
import { HomeList, HomeTitle } from "./components/Index";
import { useUsers } from "context/UserContext";
import { CustomizedInput } from "./components/customized-input/CustomizedInput";
import React from "react";
import { useFilteredUsers } from "hooks/useFilteredUsers";

const Home = () => {
  const { users, loading, error, sortUsers, refresh } = useUsers();
  const [filters, setFilters] = React.useState({
    order: "",
    status: "",
    search: "",
  });

  const filteredUsers = useFilteredUsers({
    users,
    search: filters.search,
    status: filters.status,
  });

  if (loading) return <Box>Carregando usuários</Box>;
  if (error) return <Box>Erro: {error}</Box>;

  return (
    <Box sx={getHomeStyle()}>
      <HomeTitle
        title="User Management"
        description="Manage all users in this place, create, edit, and delete them as needed."
      />
      <CustomizedInput
        filters={filters}
        setFilters={setFilters}
        sortUsers={sortUsers}
        refresh={refresh}
      />
      <HomeList users={filteredUsers} />
      <HomeFooter />
    </Box>
  );
};

export default Home;
