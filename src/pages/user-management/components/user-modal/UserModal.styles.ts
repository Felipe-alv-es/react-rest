import { SxProps, Theme } from "@mui/material";

export const getModalStyle = (theme: Theme): SxProps => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.paper
      : theme.palette.background.default,
  borderRadius: 16,
  p: theme.spacing(6, 4),
  maxWidth: 500,
  mx: "auto",
  mt: "10%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  boxShadow: theme.shadows[3],
});

export const getTitleStyle = (theme: Theme): SxProps => ({
  typography: "h5",
  fontFamily: "kanit",
  fontWeight: 400,
  textAlign: "center",
  color: theme.palette.text.primary,
});
