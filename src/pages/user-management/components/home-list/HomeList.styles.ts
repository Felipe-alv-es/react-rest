import { SxProps, Theme } from "@mui/material";

export const getHomeListStyle = (theme: Theme): SxProps => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.paper
      : theme.palette.grey[100],
  display: "flex",
  flexDirection: "column",
  borderRadius: 8,
  overflow: "hidden",
});

export const getListTitleStyle = (theme: Theme): SxProps => ({
  display: "flex",
  px: 8,
  py: 1,
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[700],
});

export const getTypographyStyle = (theme: Theme): SxProps => ({
  typography: "h6",
  fontFamily: "kanit",
  color: theme.palette.getContrastText(
    theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[700]
  ),
});

export const getItemContainerStyle = (theme: Theme): SxProps => ({
  "& > :nth-of-type(even)": {
    backgroundColor: theme.palette.mode === "dark" ? "#2b2b2b" : "#D4D4D4",
  },
  "& > :nth-of-type(odd)": {
    backgroundColor: theme.palette.mode === "dark" ? "#0a0a0a" : "#F5F5F5",
  },
});
