import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(to bottom, #2c3338, #1b1e22)",
          width: "400px",
          height: "400px",
          borderRadius: "25px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: "green",
            width: "50px",
            height: "50px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
