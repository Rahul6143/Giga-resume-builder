import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    backgroundColor: "#ffffff",
    padding: "6rem 1rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontWeight: '700 !important',
    fontSize: "2.5rem !important",
    color: "#111827",
    marginBottom: "1rem",
    "@media (max-width:1200px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width:960px)": {
      fontSize: "2rem !important",
    },
    "@media (max-width:600px)": {
      fontSize: "1.8rem !important",
    },
    "@media (max-width:480px)": {
      fontSize: "1.6rem !important",
    },
  },
  subtitle: {
    color: "#4b5563",
    fontSize: "1.125rem !important",
    maxWidth: "700px",
    marginBottom: "4rem",
    "@media (max-width:960px)": {
      fontSize: "1rem !important",
      marginBottom: "3rem",
    },
  },
  featuresWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  card: {
    flex: "1 1 300px",
    maxWidth: "360px",
    backgroundColor: "#f9fafb",
    borderRadius: "1rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.11)",
    padding: "2rem",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    },
  },
  iconCircle: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3b82f6, #9333ea)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  featureTitle: {
    fontWeight: '550 !important',
    fontSize: "1.25rem !important",
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  featureDesc: {
    fontSize: "1rem !important",
    color: "#4b5563",
    lineHeight: 1.6,
  },
}));

const WhyUseGiga = () => {
  const classes = useStyles();

  const features = [
    {
      icon: "⚡",
      title: "AI-Powered Resume Builder",
      desc: "Craft stunning, optimized resumes that grab recruiter attention using smart AI suggestions.",
    },
    {
      icon: "🎨",
      title: "Modern Templates",
      desc: "Choose from beautifully designed, ATS-friendly templates built for every industry.",
    },
    {
      icon: "⏱",
      title: "Quick & Easy",
      desc: "Build your professional resume in minutes — no design or writing skills needed.",
    },
    {
      icon: "📄",
      title: "Cover Letter Generator",
      desc: "Automatically generate matching cover letters that perfectly complement your resume.",
    },
    {
      icon: "💾",
      title: "One-Click Downloads",
      desc: "Export your resume instantly in PDF or DOCX formats without any hidden fees.",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      desc: "Your personal data stays 100% secure — we never share or sell your information.",
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Why Use Giga Resume Builder?
        </Typography>
        <Typography className={classes.subtitle}>
          Discover how Giga Resume Builder helps you create a powerful first
          impression with modern templates, smart AI suggestions, and complete
          control over your design.
        </Typography>

        <Box className={classes.featuresWrapper}>
          {features.map((item, index) => (
            <Box key={index} className={classes.card}>
              <Box className={classes.iconCircle}>{item.icon}</Box>
              <Typography className={classes.featureTitle}>
                {item.title}
              </Typography>
              <Typography className={classes.featureDesc}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUseGiga;
