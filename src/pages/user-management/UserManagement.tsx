import React from "react";
import HomeFooter from "./components/home-footer/HomeFooter";
import { Box, useTheme } from "@mui/material";
import { getHomeStyle } from "./UserManagement.styles";
import { HomeList, HomeTitle } from "./components/Index";
import { useUsers } from "context/user-context/UserContext";
import { CustomizedInput } from "./components/customized-input/CustomizedInput";
import { useFilteredUsers } from "hooks/useFilteredUsers";
import { usePagination } from "hooks/usePagination";
import { ThemeControl } from "@components/theme-control/ThemeControl";

const UserManagement = () => {
  const {
    users,
    loading,
    error,
    sortUsers,
    refresh,
    addUser,
    removeUser,
    editUser,
  } = useUsers();
  const theme = useTheme();
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

  const {
    currentPage,
    totalPages,
    currentItems: currentUsers,
    handlePageChange,
    resetPage,
  } = usePagination({ data: filteredUsers, itemsPerPage: 10 });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    if (key === "order") {
      switch (value) {
        case "alph":
          sortUsers("alph");
          break;
        case "asc":
          sortUsers("asc");
          break;
        case "desc":
          sortUsers("desc");
          break;
        default:
          refresh();
          break;
      }
    }
    resetPage();
  };

  if (loading) return <Box>Carregando usuários...</Box>;
  if (error) return <Box>Erro: {error}</Box>;

  return (
    <Box sx={getHomeStyle(theme)}>
      <ThemeControl />
      <HomeTitle
        title="Gerenciamento de usuários"
        description="Gerencie todos os usuários neste local, crie, edite e exclua-os conforme necessário."
      />
      <CustomizedInput
        filters={filters}
        setFilters={setFilters}
        handleFilterChange={handleFilterChange}
        addUser={addUser}
      />
      <HomeList
        users={currentUsers}
        removeUser={removeUser}
        editUser={editUser}
      />
      <HomeFooter
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default UserManagement;
