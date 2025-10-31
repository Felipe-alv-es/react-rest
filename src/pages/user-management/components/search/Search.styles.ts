import { SxProps, Theme } from "@mui/material";

export const getSearchStyle = (theme: Theme): SxProps => ({
  p: theme.spacing(0.25, 3),
  display: "flex",
  alignItems: "center",
  borderRadius: Number(theme.shape.borderRadius) * 2,
  width: "600px",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.action.selected
      : theme.palette.grey[100],
});

export const getSearchInputStyle = (theme: Theme): SxProps => ({
  ml: 1,
  flex: 1,
  fontFamily: "Kanit",
  color: theme.palette.text.primary,
  "&::placeholder": {
    color: theme.palette.text.secondary,
  },
});
