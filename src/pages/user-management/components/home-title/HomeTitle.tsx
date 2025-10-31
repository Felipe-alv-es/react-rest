import { Box, Typography, useTheme } from "@mui/material";

interface HomeTitleProps {
  title: string;
  description: string;
}

const HomeTitle = ({ title, description }: HomeTitleProps) => {
  const theme = useTheme();
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
        variant="h2"
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
        variant="h5"
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
