import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    padding: "40px 16px",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  title: {
    fontWeight: "700 !important",
    marginBottom: '48px !important',
    fontSize: "2.5rem",
  },
  cardsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 32,
    borderRadius: 24,
    boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 220px", // responsive width
    maxWidth: "150px !important",
    textAlign: "center",
  },
  icon: {
    fontSize: "3rem !important",
    marginBottom: 16,
  },
  text: {
    color: "#4B5563", // gray.600
  },
  buttonWrapper: {
    marginTop: 64,
  },
  button: {
    backgroundColor: "#F59E0B !important", // yellow.500
    color: "#ffffff !important",
    fontWeight: '600 !important',
    padding: "16px 48px !important",
    borderRadius: '16 !important',
    boxShadow: "0px 5px 15px rgba(0,0,0,0.15) !important",
    "&:hover": {
      backgroundColor: "#D97706 !important", // yellow.600
    },
    textTransform: "none !important",
    fontSize: "1rem !important",
  },
}));

const WhoIsItFor = () => {
  const classes = useStyles();

  const cards = [
    { icon: "🎓", text: "Students and freshers entering the job market." },
    { icon: "💼", text: "Working professionals upgrading roles or switching careers." },
    { icon: "⏳", text: "Individuals with career gaps needing impactful resumes." },
    { icon: "🤖", text: "Tech enthusiasts wanting to showcase Gen AI & project skills." },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h3">
          Who is it for?
        </Typography>

        <Box className={classes.cardsWrapper}>
          {cards.map((card, index) => (
            <Box key={index} className={classes.card}>
              <Typography className={classes.icon}>{card.icon}</Typography>
              <Typography className={classes.text}>{card.text}</Typography>
            </Box>
          ))}
        </Box>

        <Box className={classes.buttonWrapper}>
          <Button href="/builder" className={classes.button} variant="contained">
            Build Your Resume For Free
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoIsItFor;
