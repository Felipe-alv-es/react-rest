import { SxProps, Theme } from "@mui/material";

export const getHomeStyle = (theme: Theme): SxProps => ({
  height: "100vh",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
});
