import { SxProps } from "@mui/material";

export const getFormStyle = (): SxProps => ({
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  borderRadius: "16px",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
  gap: 0.5,
});

export const getInputStyle = (): SxProps => ({
  ml: 1,
  flex: 1,
  fontFamily: "Kanit",
});
