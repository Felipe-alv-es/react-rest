import { SxProps, Theme } from "@mui/material";

export const getModalStyle = (theme: Theme): SxProps => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.paper
      : theme.palette.background.default,
  borderRadius: theme.spacing(0.5),
  p: theme.spacing(4),
  width: 400,
  mx: "auto",
  mt: "20vh",
  boxShadow: theme.shadows[5],
  textAlign: "center",
});
