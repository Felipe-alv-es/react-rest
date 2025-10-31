import { Box } from "@mui/material";
import { CustomSelect } from "@components/custom-select/CustomSelect";
import { FaPlus } from "react-icons/fa";
import CustomButton from "@components/custom-button/CustomButton";
import { Search } from "../search/Search";
import {
  getContainerStyle,
  getFilterOptionsStyle,
} from "./CustomizedInput.styles";
import { filterConfigs } from "utils/filterOptions";
import { CustomizedInputProps } from "pages/home/Home.types";

export const CustomizedInput = ({
  filters,
  setFilters,
  sortUsers,
  refresh,
}: CustomizedInputProps) => {
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
  };

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
      <CustomButton text="Add user" icon={<FaPlus />} />
    </Box>
  );
};
