import { Box, Typography } from "@mui/material";

interface HomeTitleProps {
  title: string;
  description: string;
}

const HomeTitle = ({ title, description }: HomeTitleProps) => {
  return (
    <Box
      sx={{
        paddingY: "16px",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" fontFamily={"kanit"} fontWeight={500}>
        {title}
      </Typography>
      <Typography variant="h5" fontFamily={"kanit"} fontWeight={"400"}>
        {description}
      </Typography>
    </Box>
  );
};

export default HomeTitle;
