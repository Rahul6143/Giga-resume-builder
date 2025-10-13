import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    padding: "40px 16px",
    backgroundColor: "#ffffff", // or theme background
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: 850,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: '32px !important',
  },
  title: {
    fontWeight: ' 700 !important',
    fontSize: "2rem !important",
    textAlign: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: '32px !important',
    borderRadius: 24,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
    gap: '24px !important',
  },
  description: {
    fontSize: "1rem !important",
    color: "#4B5563", // gray.700
    lineHeight: '1.7 !important',
  },
  highlightBox: {
    display: "flex",
    flexDirection: "column",
    gap: '16px !important',
    padding: '24px !important',
    borderLeft: "4px solid #0062ffff",
    borderRadius: "0 12px 12px 0",
    backgroundColor: "#cfe0f563 !important", // primary.light
  },
  highlightTitle: {
    fontSize: "1.25rem !important",
    color: "#0062ffff",
  },
  description1: {
    fontSize: "0.85rem !important",
    color: "#4B5563", // gray.700
    lineHeight: '1.7 !important',
  },
}));

const AboutUsSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h4">
          About Us
        </Typography>

        <Box className={classes.card}>
          <Typography className={classes.description}>
            Gigaversity is India's first product-based learning platform, headquartered in Hyderabad, offering both on-campus and online programs in rapidly growing domains such as AI & ML, Full Stack Development, and Data Science. Our unique approach empowers students to build industry-grade, scalable projects incubated directly by leading tech companies. This hands-on experience ensures learners gain real-world skills and understand how cutting-edge products are developed from the ground up.
          </Typography>

          <Box className={classes.highlightBox}>
            <Typography className={classes.highlightTitle}>
              Why We Created the Gigaversity Resume Builder
            </Typography>

            <Typography className={classes.description1}>
              Your resume is your digital identity — the key to entering the professional world. Yet, many aspirants struggle with how to build a strong resume, present their skills effectively, and structure their information clearly. This confusion often leaves them blank or overwhelmed.
            </Typography>

            <Typography className={classes.description1}>
              To solve this, we created India's first AI-powered resume builder that breaks down these barriers. Simply by selecting your target role, our intelligent assistant guides you step-by-step to craft a professional, recruiter-approved resume that truly showcases your skills and projects — removing all the guesswork and helping you get noticed.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsSection;
