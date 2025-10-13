import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    textAlign: "center",
    padding: "40px 16px",
    backgroundColor: "#F3F4F6", // gray.100
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 16px !important",
  },
  headingWrapper: {
    marginBottom: 48,
  },
  title: {
    fontWeight: '700 !important',
    marginBottom: '8px !important',
    fontSize: "2rem !important",
  },
  subtitle: {
    color: "#4B5563", // gray.600
  },
  tableWrapper: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 24,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  tableHeader: {
    display: "flex",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    color: "#ffffff",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: '700 !important',
    fontSize: "1.1rem !important",
    padding: "20px 0px !important",
  },
  headerCell: {
    flex: 1,
    fontFamily: "'Roboto', sans-serif", 
    textAlign: "center",
  },
  headerCellLeft: {
    flex: 1,
    textAlign: "left",
    paddingLeft: '40px !important',
  },
  row: {
    display: "flex",
    fontFamily: "'Roboto', sans-serif",
    padding: "16px 0 !important",
    borderBottom: "1px solid #E5E7EB",
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "#F9FAFB", // gray.50
    },
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontWeight: '700 !important',
  },
  cellLeft: {
    flex: 1,
    textAlign: "left",
    paddingLeft: '40px !important',
    fontWeight: '500 !important',
  },
}));

const ComparisonSection = () => {
  const classes = useStyles();

  const features = [
    { feature: "Gen AI Skill Recommendations", giga: "✔ Yes", other: "✖ No", gigaColor: "green", otherColor: "red" },
    { feature: "Real-Time Project Suggestions", giga: "✔ Yes", other: "✖ No", gigaColor: "green", otherColor: "red" },
    { feature: "ATS Compatibility Tested", giga: "✔ Yes", other: "⚠️ Limited", gigaColor: "green", otherColor: "orange" },
    { feature: "Free to Use", giga: "✔ 100% Free", other: "⚠️ Limited Access", gigaColor: "green", otherColor: "orange" },
    { feature: "One-Click GitHub Projects", giga: "✔ Yes", other: "✖ No", gigaColor: "green", otherColor: "red" },
    { feature: "Built for Freshers & Tech Roles", giga: "✔ Specifically Designed", other: "⚠️ Generic", gigaColor: "green", otherColor: "orange" },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Box className={classes.headingWrapper}>
          <Typography className={classes.title} variant="h4">
            Why Giga Resume Builder Stands Out
          </Typography>
          <Typography className={classes.subtitle}>
            See how we compare to other resume builders
          </Typography>
        </Box>

        <Box className={classes.tableWrapper}>
          {/* Header */}
          <Box className={classes.tableHeader}>
            <Box className={classes.headerCellLeft}>Feature</Box>
            <Box className={classes.headerCell}>Giga Resume Builder</Box>
            <Box className={classes.headerCell}>Other Resume Builders</Box>
          </Box>

          {/* Rows */}
          {features.map((row, index) => (
            <Box key={index} className={classes.row}>
              <Box className={classes.cellLeft}>{row.feature}</Box>
              <Box className={classes.cell} style={{ color: row.gigaColor }}>
                {row.giga}
              </Box>
              <Box className={classes.cell} style={{ color: row.otherColor }}>
                {row.other}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ComparisonSection;
