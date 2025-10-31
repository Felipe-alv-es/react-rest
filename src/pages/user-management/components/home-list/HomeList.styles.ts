import { SxProps } from "@mui/material/styles";

export const getHomeListStyle = (): SxProps => ({
  backgroundColor: "#EBEBEB",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  overflow: "hidden",
});

export const getListTitleStyle = (): SxProps => ({
  display: "flex",
  paddingX: "64px",
  paddingY: "8px",
  justifyContent: "space-between",
  background: "#464646",
  alignItems: "center",
});

export const getTypographyStyle = (): SxProps => ({
  typography: "h6",
  color: "#f7f7f7",
  fontFamily: "kanit",
});

export const getItemContainerStyle = (): SxProps => ({
  "& > :nth-of-type(even)": { background: "#D4D4D4" },
});
