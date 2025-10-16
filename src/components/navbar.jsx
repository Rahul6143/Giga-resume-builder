import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#FFFFFF !important",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1) !important",
    position: "fixed !important",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 50,
  },
  toolbar: {
    display: "flex !important",
    justifyContent: "space-around !important",
    alignItems: "center !important",
    maxWidth: "1200px !important",
    margin: "0 auto",
    width: "100%",
  },
  logoContainer: {
    display: "flex !important",
    alignItems: "center !important",
    textDecoration: "none !important",
    cursor: "pointer",
  },
  logoText: {
    fontSize: "1.4rem !important",
    fontWeight: "700!important",
    background: "linear-gradient(90deg, #2563EB, #7C3AED) !important",
    WebkitBackgroundClip: "text!important",
    WebkitTextFillColor: "transparent !important",
  },
  navLinks: {
    display: "flex !important",
    gap: "32px !important",
    listStyle: "none !important",
    alignItems: "center !important",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  navItem: {
    color: "#374151 !important",
    fontFamily: "'Roboto', sans-serif !important",
    fontWeight: "500!important",
    textDecoration: "none !important",
    marginRight: "16px !important",
    transition: "color 0.3s ease !important",
    "&:hover": {
      color: "#2563EB !important",
    },
  },
  rightButtons: {
    display: "flex !important",
    alignItems: "center !important",
    gap: "16px !important",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  loginBtn: {
    color: "#374151 !important",
    fontWeight: "500!important",
    textTransform: "none!important",
    "&:hover": {
      color: "#2563EB !important",
    },
  },
  getStartedBtn: {
    backgroundColor: "#2563EB !important",
    color: "#FFFFFF !important",
    padding: "8px 20px !important",
    borderRadius: "8px !important",
    fontWeight: "600!important",
    textTransform: "none!important",
    "&:hover": {
      backgroundColor: "#1E40AF !important",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleGetStartedClick = () => {
    navigate("/templates");
  };

  return (
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoContainer} onClick={() => navigate("/")}>
          <Typography className={classes.logoText}>Giga Resume</Typography>
        </Box>

        <ul className={classes.navLinks}>
          <li>
            <a href="#features" className={classes.navItem}>
              Features
            </a>
          </li>
          <li>
            <a href="#templates" className={classes.navItem}>
              Templates
            </a>
          </li>
          <li>
            <a href="#pricing" className={classes.navItem}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#faq" className={classes.navItem}>
              FAQ
            </a>
          </li>
        </ul>

        <Box className={classes.rightButtons}>
          <Button
            className={classes.loginBtn}
            onClick={handleLoginClick}
            disableElevation
          >
            Login
          </Button>
          <Button
            className={classes.getStartedBtn}
            onClick={handleGetStartedClick}
            disableElevation
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
