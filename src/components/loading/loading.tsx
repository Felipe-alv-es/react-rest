import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          mb: 2,
          color: "primary.main",
          animation: "spin 1s linear infinite",
        }}
      />
      <Typography variant="h6" color="#383838">
        {"...Carregando dados..."}
      </Typography>
    </Box>
  );
}
