import { SxProps, Theme, alpha } from "@mui/material";

export const getFormStyle = (theme: Theme): SxProps => ({
  p: theme.spacing(1, 2),
  display: "flex",
  alignItems: "center",
  borderRadius: 16,
  gap: theme.spacing(0.5),
  boxShadow: alpha(theme.palette.common.black, 0.1),
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.action.selected
      : theme.palette.grey[100],
});

export const getInputStyle = (theme: Theme): SxProps => ({
  ml: 1,
  flex: 1,
  fontFamily: "Kanit",
  color: theme.palette.text.primary,
  "&::placeholder": {
    color: theme.palette.text.secondary,
  },
});
