"use client";
import { Box, Button, Typography } from "@mui/material";
import Circle from "./components/Circle";
import { useState } from "react";

export default function Home() {
  const numbers = ["1", "2", "3", "4", "5"];
  const [state, setState] = useState(false);
  return (
    <Box
      sx={{
        backgroundColor: "hsl(216, 12%, 8%)",
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
          width: {
            xs: "90%",
            sm: "375px",
            md: "500px",
            lg: "700px",
            xl: "800px",
          },
          height: { xs: "auto", sm: "300px" },
          borderRadius: "25px",
          display: "flex",
          paddingLeft: { xs: "2%", sm: "1.5%" },
          paddingTop: { xs: "5%", sm: "2%" },
          flexDirection: "column",
          gap: "25px",
          maxWidth: "100%",
        }}
      >
        <Circle
          value={
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
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
          sx={{
            color: "rgba(242, 240, 239, 0.5)",
            marginTop: "-7px",
            fontSize: "15px",
          }}
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
                <Typography
                  sx={{
                    color: "rgba(242, 240, 239, 0.5)",
                    "&:hover": {
                      color: "#000000",
                    },
                  }}
                >
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
              backgroundColor: "#FC7614",
              width: "270px",
              borderRadius: "15px",
              color: "rgb(0,0,0,0.7)",
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
