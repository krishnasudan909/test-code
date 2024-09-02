import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import plates from "./ishiharaPlates";

function IshiharaTest() {
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event, index) => {
    setResponses({
      ...responses,
      [index]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const finalResponses = plates.map((_, index) => responses[index] || "");
    navigate("/test/result", { state: { responses: finalResponses } });
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "3%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Please enter the numbers visible in the plates. If you're not sure, you
        can leave it empty.
      </Typography>

      <Box
        sx={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          width: "80%",
        }}
      >
        {plates.map((plate, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={plate.src}
              alt={`Ishihara Plate ${index + 1}`}
              style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
            />
            <TextField
              label={`Plate ${index + 1}`}
              variant="outlined"
              value={responses[index] || ""}
              onChange={(event) => handleInputChange(event, index)}
              sx={{ width: "100%", maxWidth: "100px" }}
            />
          </Box>
        ))}
      </Box>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
        sx={{
          marginTop: "30px",
          padding: "10px 30px",
          fontSize: "16px",
          marginBottom: "30px",
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default IshiharaTest;
