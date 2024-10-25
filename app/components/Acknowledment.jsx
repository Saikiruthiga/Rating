import { Box, Typography, Button } from "@mui/material";
const Acknowledgement = ({ number }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #2c3338, #1b1e22)",
        width: "400px",
        height: "400px",
        borderRadius: "25px",
        display: "flex",
        paddingLeft: "1.5%",
        paddingTop: "2%",
        flexDirection: "column",
        gap: "25px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: "60%",
          borderRadius: "15px",
          backgroundColor: "hsl(213, 19%, 18%)",
          color: "hsl(25, 97%, 53%)",
          fontSize: "15px",
          textTransform: "none",
        }}
      >
        <Typography variant="h8">You selected {number} out of 5</Typography>
      </Button>
      <Typography variant="h6" sx={{ color: "white" }}>
        Thank you!
      </Typography>
      <Typography sx={{ color: "rgba(242, 240, 239, 0.5)" }}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, dont hesitate to get in touch.
      </Typography>
    </Box>
  );
};
export default Acknowledgement;
