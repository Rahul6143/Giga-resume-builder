import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  outerBox: {
    padding: "40px 16px !important",
    display: "flex !important",
    justifyContent: "center !important",
  },
  innerBox: {
    background: "linear-gradient(135deg, #2563EB, #1E40AF, #7C3AED)",
    borderRadius: "32px",
    width: "70%",
    padding: "70px 48px !important",
    textAlign: "center !important",
    color: "#FFFFFF !important",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2) !important",
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",

  },
  title: {
    fontWeight: "bold !important",
    fontSize: "2rem !important",
    marginBottom: "32px !important",
  },
  description: {
    fontSize: "1.125rem !important",
    opacity: '0.9!important',
    marginBottom: "32px !important",
  },
  button: {
    backgroundColor: "#FFFFFF !important",
    color: "#2563EB !important",
    fontWeight: '600!important',
    padding: "12px 48px !important",
    borderRadius: "8px !important",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: "#F3F4F6 !important",
    },
  },
  strong: {
    fontWeight: '700!important',
  },
  "@media (max-width:960px)": {
    innerBox: {
      padding: "48px 24px",
    },
    title: {
      fontSize: "1.5rem",
    },
    description: {
      fontSize: "1rem",
    },
  },
});

const CTASection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.outerBox}>
      <Box className={classes.innerBox}>
        <Typography className={classes.title}>
          Giga Resume - The smarter way to build resume in 2025
        </Typography>

        <Typography className={classes.description}>
          <span className={classes.strong}>Gigaversity Resume Builder</span> isn’t just another{" "}
          <span className={classes.strong}>free resume maker</span> — it’s your launchpad to success. With{" "}
          <span className={classes.strong}>Gen AI suggestions, project-building guidance</span>, and{" "}
          <span className={classes.strong}>ATS-optimized templates</span>, you’re not just creating a resume — you’re
          building your future.
        </Typography>

        <Button href="/templates" className={classes.button}>
          Start Building Now →
        </Button>
      </Box>
    </Box>
  );
};

export default CTASection;
