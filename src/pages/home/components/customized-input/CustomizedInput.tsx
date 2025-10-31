import { Box } from "@mui/material";
import { CustomSelect } from "@components/custom-select/CustomSelect";
import { FaPlus } from "react-icons/fa";
import { CustomButton } from "@components/custom-button/CustomButton";
import { Search } from "../search/Search";
import { filterConfigs } from "utils/filterOptions";
import { CustomizedInputProps } from "pages/home/Home.types";
import { useState } from "react";
import {
  getContainerStyle,
  getFilterOptionsStyle,
} from "./CustomizedInput.styles";
import { AddUserModal } from "../add-user-modal/AddUserModal";

export const CustomizedInput = ({
  filters,
  setFilters,
  handleFilterChange,
  addUser,
}: CustomizedInputProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box sx={getContainerStyle()}>
      <Box sx={getFilterOptionsStyle()}>
        <Search filters={filters} setFilters={setFilters} />
        {filterConfigs.map(({ key, placeholder, options }) => (
          <CustomSelect
            key={key}
            value={filters[key as keyof typeof filters]}
            onChange={(value) => handleFilterChange(key, value)}
            placeholder={placeholder}
            options={options}
            width={key === "order" ? 180 : 160}
          />
        ))}
      </Box>
      <CustomButton
        text="Adicionar usuário"
        icon={<FaPlus />}
        onClick={() => setIsModalOpen(true)}
      />
      <AddUserModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addUser={addUser}
      />
    </Box>
  );
};
