import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, styled, Snackbar, Alert } from "@mui/material";
import Logo from "../assets/logo/UBS_Logo.png";
import Optivision from "../assets/logo/optivision.png";

const StyledButton = styled(Button)({
  color: "black",
  textDecoration: "none",
  position: "relative",
  marginRight: "10px",
  "&:hover::after": {
    content: '""',
    display: "block",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "black",
  },
  "&.active::after": {
    content: '""',
    display: "block",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "black",
  },
});

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleTestClick = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
    navigate("/test");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="UBS Logo"
              style={{ height: "40px", marginRight: "20px" }}
            />
            <h3>OptiVision</h3>
            <img
              src={Optivision}
              alt="UBS Logo"
              style={{ height: "40px", marginRight: "20px" }}
            />
            <Box sx={{ marginLeft: "20px" }}>
              <StyledButton
                component={Link}
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </StyledButton>
              <StyledButton
                onClick={handleTestClick}
                className={
                  location.pathname.startsWith("/test") ? "active" : ""
                }
              >
                Test
              </StyledButton>
            </Box>
          </Box>
        </Typography>
      </Toolbar>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="warning"
          sx={{ bgcolor: "amber.main" }}
        >
          This test is currently working for Protanopia and Deuteranopia.
        </Alert>
      </Snackbar>
    </AppBar>
  );
}

export default Navbar;
