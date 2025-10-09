import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    background: "linear-gradient(to bottom right, #f8faff, #f3e8ff)",
    padding: "6rem 1rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontWeight: 700,
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
  stepsWrapper: {
    display: "flex",
    marginTop: "2rem",
    justifyContent: "center",
    gap: "1.75rem",
    marginLeft: "0rem",
    marginRight: "0rem",
  },
  stepCard: {
    flex: "1 1 300px",
    maxWidth: "200px",
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
    padding: "32px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    },
  },
  stepTitle: {
    fontWeight: '600 !important',
    fontSize: "20px !important",
    color: "#1f2937",
    marginBottom: "0.75rem !important",
  },
  stepDesc: {
    fontSize: "16px !important",
    color: "#4b5563",
    lineHeight: 1.6,
  },
}));

const FourSteps = () => {
  const classes = useStyles();

  const steps = [
    {
      num: "1",
      title: "1. Choose a Template",
      desc: "Pick from a collection of professional, modern, and ATS-friendly templates that fit your industry and style.",
    },
    {
      num: "2",
      title: "2. Add Your Details",
      desc: "Fill in your personal info, work experience, education, and skills with our guided form system.",
    },
    {
      num: "3",
      title: "3. Customize & Optimize",
      desc: "Tailor your resume using smart AI suggestions to highlight your achievements and stand out to employers.",
    },
    {
      num: "4",
      title: "4. Download & Apply",
      desc: "Export your polished resume instantly in PDF or DOCX format and start applying confidently.",
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Get Your Standout Resume in 4 Easy Steps!
        </Typography>
        <Typography className={classes.subtitle}>
          Building your dream resume is fast, simple, and stress-free.  
          Follow these four steps to land your next big opportunity.
        </Typography>

        <Box className={classes.stepsWrapper}>
          {steps.map((item, index) => (
            <Box key={index} className={classes.stepCard}>
              <Typography className={classes.stepTitle}>
                {item.title}
              </Typography>
              <Typography className={classes.stepDesc}>{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FourSteps;
