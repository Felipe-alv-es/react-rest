import { Box, IconButton } from "@mui/material";
import { useCustomTheme } from "context/theme-context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeControl = () => {
  const { toggleColorMode, mode } = useCustomTheme();

  return (
    <Box sx={{ position: "absolute", left: 50 }}>
      <IconButton
        onClick={toggleColorMode}
        sx={{
          height: "64px",
          width: "64px",
        }}
      >
        {mode === "dark" ? (
          <FaMoon size={64} color="lightBlue" />
        ) : (
          <FaSun size={64} color="#FFDE21" />
        )}
      </IconButton>
    </Box>
  );
};
