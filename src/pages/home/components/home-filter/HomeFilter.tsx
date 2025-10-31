import React from "react";
import { Box } from "@mui/material";
import { CustomSelect } from "@components/custom-select/CustomSelect";
import { FaPlus } from "react-icons/fa";
import CustomButton from "@components/custom-button/CustomButton";
import Search from "../search/Search";
import { getContainerStyle, getFilterOptionsStyle } from "./HomeFilter.styles";
import { filterConfigs } from "utils/filterOptions";

export const CustomizedInputBase: React.FC = () => {
  const [filters, setFilters] = React.useState({
    order: "",
    status: "",
    search: "",
  });

  return (
    <Box sx={getContainerStyle()}>
      <Box sx={getFilterOptionsStyle()}>
        <Search filters={filters} />
        {filterConfigs.map(({ key, placeholder, options }) => (
          <CustomSelect
            key={key}
            value={filters[key]}
            onChange={() => undefined}
            placeholder={placeholder}
            options={options}
          />
        ))}
      </Box>
      <CustomButton text="Add user" icon={<FaPlus />} />
    </Box>
  );
};
