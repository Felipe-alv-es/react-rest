import { SxProps } from "@mui/material";

export const getSearchStyle = (): SxProps => ({
  p: "2px 8px",
  display: "flex",
  alignItems: "center",
  borderRadius: "16px",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
  width: "600px",
});

export const getSearchInputStyle = (): SxProps => ({
  ml: 1,
  flex: 1,
  fontFamily: "Kanit",
});
