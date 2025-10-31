import { SxProps, Theme, alpha } from "@mui/material";

export const getCustomSelectStyle = (theme: Theme): SxProps => ({
  p: theme.spacing(1, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 16,
  cursor: "pointer",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.action.selected
      : theme.palette.grey[100],
  height: "100%",
});

export const getOptionsStyle = (theme: Theme): SxProps => ({
  position: "absolute",
  top: "110%",
  left: 0,
  right: 0,
  borderRadius: 2,
  boxShadow: alpha(theme.palette.common.black, 0.15),
  zIndex: 10,
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
});

export const getOptionsTextStyle = (theme: Theme): SxProps => ({
  typography: "body1",
  color: theme.palette.text.primary,
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontFamily: "Kanit",
});

export const getIconStyle = (_theme: Theme): SxProps => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
