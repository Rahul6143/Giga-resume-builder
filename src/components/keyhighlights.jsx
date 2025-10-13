import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  section: {
    padding: "40px 16px !important",
    background: "linear-gradient(135deg, #f5f8ff, #f8f9fb)!important",
    position: "relative !important",
    overflow: "hidden !important",
    textAlign: "center !important",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center !important",
    padding: "10px 20px !important",
    borderRadius: '50px !important',
    background: "rgba(99, 102, 241, 0.1)!important",
    color: "#6366f1!important",
    fontWeight: '500!important',
    fontSize: '14px!important',
    marginBottom: '15px !important',
  },
  heading: {
    fontSize: "2.2rem !important",
    fontWeight: '700 !important',
    marginBottom: '10px !important',
  },
  subtext: {
    fontSize: "1.1rem !important",
    color: "#666 !important",
    maxWidth: '600 !important',
    margin: "0 auto !important",
  },
  marquee: {
    overflow: "hidden !important",
    width: "100% !important",
    marginTop: '50px !important',
  },
  marqueeTrack: {
    display: "flex!important",
    animation: "$marquee 20s linear infinite!important",
  },
  "@keyframes marquee": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
  highlightCard: {
    flex: "0 0 auto !important",
    width: '220px !important',
    margin: "0 15px !important",
    padding: '20px !important',
    borderRadius: '16px !important',
    background: "#fff !important",
    boxShadow: "0px 10px 20px rgba(0,0,0,0.05) !important",
    textAlign: "center !important",
  },
  iconBox: {
    width: "60px !important",
    height: "60px !important",
    borderRadius: "50% !important",
    margin: "0 auto 15px !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    color: "#fff !important",
    fontSize: '24px !important',
    fontWeight: "bold !important",
  },
}));

const highlights = [
  { icon: "⭐", title: "Top Rated", desc: "Trusted by thousands of job seekers", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
  { icon: "⚡", title: "Lightning Fast", desc: "Build your resume in minutes", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
  { icon: "🧠", title: "Gen AI Recommendation", desc: "Smart suggestions powered by AI", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
  { icon: "💡", title: "Project Suggestion", desc: "Get relevant project ideas", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
  { icon: "📄", title: "Professional Layouts", desc: "Beautiful, modern templates", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
  { icon: "🏆", title: "Recruiter Approved", desc: "Professionally vetted templates", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
  { icon: "🛡️", title: "ATS-Friendly", desc: "Pass all applicant tracking systems", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
  { icon: "🎯", title: "Skills Suggestion", desc: "AI-powered skill recommendations", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
];

const KeyHighlights = () => {
  const classes = useStyles();
  const marqueeItems = [...highlights, ...highlights];

  return (
    <section className={classes.section}>
      <Box className={classes.badge}>
        ✨ <span>Why Choose Us</span>
      </Box>
      <Typography className={classes.heading}>Key Highlights of Giga Resume Builder</Typography>
      <Typography className={classes.subtext}>
        Powerful features designed to help you create the perfect resume
      </Typography>

      <Box className={classes.marquee}>
        <Box className={classes.marqueeTrack}>
          {marqueeItems.map((item, index) => (
            <Box className={classes.highlightCard} key={index}>
              <Box className={classes.iconBox} style={{ background: item.gradient }}>
                {item.icon}
              </Box>
              <Typography variant="h6" style={{ marginBottom: 8 }}>{item.title}</Typography>
              <Typography variant="body2" style={{ color: "#666" }}>{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default KeyHighlights;
