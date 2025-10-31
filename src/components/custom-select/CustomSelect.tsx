import { useState } from "react";
import {
  ClickAwayListener,
  Box,
  Paper,
  Typography,
  IconButton,
  MenuItem,
  Icon,
  useTheme,
} from "@mui/material";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import {
  getCustomSelectStyle,
  getIconStyle,
  getOptionsStyle,
  getOptionsTextStyle,
} from "./CustomSelect.styles";

export const CustomSelect: React.FC<{
  options: { label: string; value: string }[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  width?: string | number;
  ariaLabel?: string;
}> = ({
  options,
  placeholder = "Name",
  value,
  onChange,
  width = 150,
  ariaLabel,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleSelect = (newValue: string) => {
    onChange(newValue);
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box position="relative" sx={{ width }}>
        <Paper
          onClick={() => setOpen((prev) => !prev)}
          sx={getCustomSelectStyle(theme)}
          elevation={0}
          aria-label={ariaLabel}
        >
          <Icon sx={getIconStyle(theme)}>
            <LuUserRound size={18} />
          </Icon>
          <Typography sx={getOptionsTextStyle(theme)}>
            {value
              ? options.find((opt) => opt.value === value)?.label
              : placeholder}
          </Typography>
          <IconButton size="small">
            {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </IconButton>
        </Paper>
        {open && (
          <Paper sx={getOptionsStyle(theme)}>
            {options.map((opt) => (
              <MenuItem
                key={opt.value}
                selected={opt.value === value}
                onClick={() => handleSelect(opt.value)}
                sx={{
                  fontFamily: "Kanit",
                }}
              >
                {opt.label}
              </MenuItem>
            ))}
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
};
