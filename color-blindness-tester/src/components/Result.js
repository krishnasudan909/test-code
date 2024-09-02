import React from "react";
import { Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import plates from "./ishiharaPlates";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const responses = location.state.responses;

  const analyzeResponses = () => {
    let correctScore = 0;
    let protanopiaScore = 0;
    let deuteranopiaScore = 0;

    plates.forEach((plate, index) => {
      const userResponse = responses[index];
      if (plate.correct.includes(userResponse)) {
        correctScore++;
      }
      if (plate.protanopia.includes(userResponse)) {
        protanopiaScore++;
      }
      if (plate.deuteranopia.includes(userResponse)) {
        deuteranopiaScore++;
      }
    });

    const maxScore = Math.max(correctScore, protanopiaScore, deuteranopiaScore);

    if (maxScore === protanopiaScore) {
      return "You might have Protanopia ,click on home to know more!";
    } else if (maxScore === deuteranopiaScore) {
      return "You might have Deuteranopia, click on home to know more!";
    } else {
      return "No color blindness detected";
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <Typography variant="h4" gutterBottom>
        Your Test Results
      </Typography>
      <Typography variant="h6" gutterBottom>
        {analyzeResponses()}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate("/test")}
        sx={{
          marginTop: "20px",
        }}
      >
        Go Back to Start
      </Button>
    </div>
  );
}

export default Result;
