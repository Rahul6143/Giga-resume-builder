import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex !important",
    flexWrap: "wrap !important",
    gap: "8px !important",
    justifyContent: "center !important",
  },
  activeButton: {
    background: "linear-gradient(135deg, #2563eb, #7c3aed) !important", // gradient using hex
    color: "#ffffff !important",
    border: "none !important",
    "&:hover": {
      opacity: '0.9 !important',
      background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
    },
    transition: "opacity 0.2s !important",
  },
  inactiveButton: {
    border: "1px solid #9ca3af !important", // gray border
    color: "#111827 !important",
    "&:hover": {
      borderColor: "#2563eb !important",
    },
    transition: "border-color 0.2s !important",
  },
});

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={activeCategory === category ? classes.activeButton : classes.inactiveButton}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
