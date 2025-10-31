import { SxProps } from "@mui/material";

export const getCustomSelectStyle = (): SxProps => ({
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "16px",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
  cursor: "pointer",
});

export const getOptionsStyle = (): SxProps => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  borderRadius: "12px",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
  zIndex: 10,
  overflow: "hidden",
});

export const getOptionsTextStyle = (): SxProps => ({
  typography: "body1",
  color: "inherit",
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontFamily: "Kanit",
});

export const getIconStyle = (): SxProps => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
