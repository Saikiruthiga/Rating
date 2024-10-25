import { Box, Button, Typography } from "@mui/material";
import Circle from "./components/Circle";

export default function Home() {
  const numbers = ["1", "2", "3", "4", "5"];
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
          paddingLeft: "1.5%",
          paddingTop: "2%",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Circle
          value={
            <img
              width="22"
              height="22"
              src="https://img.icons8.com/skeuomorphism/32/star.png"
              alt="star"
            />
          }
        />
        <Typography
          variant="h6"
          color="#f5f5f5"
          sx={{ fontWeight: "bold", fontSize: "25px" }}
        >
          How did we do ?
        </Typography>
        <Typography
          sx={{ color: "rgba(242, 240, 239, 0.5)", marginTop: "-7px" }}
        >
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "-15px",
          }}
        >
          {numbers.map((number, index) => (
            <Circle
              key={index}
              value={
                <Typography sx={{ color: "rgba(242, 240, 239, 0.5)" }}>
                  {number}
                </Typography>
              }
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "orange",
              width: "270px",
              borderRadius: "15px",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
