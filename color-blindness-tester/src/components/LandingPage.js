import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Color Blindness Test By OptiVision
      </Typography>
      <Typography variant="body1" gutterBottom>
        This test will help determine if you have any form of color blindness.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        endIcon={<SendIcon />}
        onClick={() => navigate("/test/ishiharaTest")}
        sx={{
          marginTop: "20px",
        }}
      >
        Start Test
      </Button>
    </div>
  );
}

export default LandingPage;
