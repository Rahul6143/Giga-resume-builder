import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
      marginTop: "0rem !important",
    background: "linear-gradient(to bottom right, #bfdbfe, #f3e8ff, #ffffff)",
  },
  container: {
    position: "relative",
    maxWidth: "1200px",
    padding: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (min-width:1024px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    zIndex: 1,
    maxWidth: "600px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    backgroundColor: "#dbeafe",
    color: "#2563eb",
    fontSize: "0.9rem",
    fontWeight: 500,
    alignSelf: "flex-start",
  },
  title: {
    fontWeight: '700 !important',
    lineHeight: 1.2,
    fontSize: "3rem !important",
    "@media (min-width:1024px)": {
      fontSize: "3.75rem !important",
    },
  },
  gradientText: {
    background: "linear-gradient(to right, #3b82f6, #9333ea)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: 700,
  },
  description: {
    fontSize: "1.125rem !important",
    color: "#4b5563",
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  primaryBtn: {
    backgroundColor: "#2563eb !important",
    color: "#ffffff !important",
    padding: "0.75rem 1.5rem !important",
    borderRadius: "0.5rem !important",
    fontSize: "1.125rem !important",
    fontWeight: "500 !important",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: "#1d4ed8 !important",
    },
  },
  secondaryBtn: {
    border: "1px solid #d1d5db !important",
    color: "#1f2937 !important",
    padding: "0.75rem 1.5rem !important",
    borderRadius: "0.5rem !important",
    fontSize: "1.125rem !important",
    fontWeight: "500 !important",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: "#f3f4f6 !important",
    },
  },
  checklist: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    color: "#4b5563",
    fontSize: "0.9rem",
    flexWrap: "wrap",
  },
  checkItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  rightImageWrapper: {
    position: "relative",
    marginTop: "3rem",
    "@media (min-width:1024px)": {
      marginTop: 0,
    },
  },
  imageBlurBg: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom right, #bfdbfe, #e9d5ff)",
    filter: "blur(80px)",
    zIndex: 0,
  },
  image: {
    position: "relative",
    borderRadius: "1rem",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    width: "100%",
    height: "auto",
    zIndex: 1,
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        {/* Left Content */}
        <Box className={classes.leftContent}>
          <Box className={classes.badge}>🚀 Build Your Future Today</Box>

          <Typography variant="h1" className={classes.title}>
            Create Your{" "}
            <span className={classes.gradientText}>Job-Winning Resume</span>
          </Typography>

          <Typography className={classes.description}>
            Whether you're a fresher looking for your first IT job or a professional aiming for a career switch, Gigaversity's Resume Builder helps you build a resume that reflects your skills, projects, and growth in a recruiter-approved, ATS-friendly format.
Choose from a variety of resume templates that adapt to your career stage, helping you present your achievements, skills, and projects clearly and professionally so recruiters notice what truly matters.
          </Typography>

          <Box className={classes.buttonGroup}>
            <Button href="/builder" className={classes.primaryBtn}>
              Get Started Free →
            </Button>
            <Button href="#" className={classes.secondaryBtn}>
              View Templates
            </Button>
          </Box>

          <Box className={classes.checklist}>
            <Box className={classes.checkItem}>
              <span>✔</span>
              <span>No credit card required</span>
            </Box>
            <Box className={classes.checkItem}>
              <span>✔</span>
              <span>Free forever</span>
            </Box>
          </Box>
        </Box>

        {/* Right Image */}
        <Box className={classes.rightImageWrapper}>
          <Box className={classes.imageBlurBg}></Box>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Resume builder preview"
            className={classes.image}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
