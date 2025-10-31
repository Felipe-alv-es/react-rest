import { SxProps } from "@mui/material";

export const getModalStyle = (): SxProps => ({
  backgroundColor: "#F5F5F5",
  borderRadius: "16px",
  padding: "32px",
  maxWidth: 500,
  mx: "auto",
  mt: "10%",
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const getTitleStyle = (): SxProps => ({
  typography: "h5",
  fontFamily: "kanit",
  fontWeight: "400",
  textAlign: "center",
});
