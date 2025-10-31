import { SxProps } from "@mui/material";

export const getContainerStyle = (): SxProps => ({
  justifyContent: "space-between",
  display: "flex",
});

export const getFilterOptionsStyle = (): SxProps => ({
  display: "flex",
  gap: 2,
});
