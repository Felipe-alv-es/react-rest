import React from "react";
import { Box } from "@mui/material";

export const FullWidthBox: React.FC<{ children: React.ReactNode; sx? }> = ({
  children,
}) => {
  return <Box sx={{ width: "100%" }}>{children}</Box>;
};
