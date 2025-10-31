import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

interface HomeTitleProps {
  title: string;
  description: string;
}

const HomeTitle = ({ title, description }: HomeTitleProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:1400px)");

  return (
    <Box
      component="header"
      sx={{
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography
        component="h1"
        variant={isSmallScreen ? "h4" : "h2"}
        fontFamily="kanit"
        fontWeight={500}
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant={isSmallScreen ? "h6" : "h5"}
        fontFamily="kanit"
        fontWeight={400}
        sx={{
          color: theme.palette.text.secondary,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default HomeTitle;
