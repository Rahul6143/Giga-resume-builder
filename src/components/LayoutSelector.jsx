import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { toast } from "sonner";
import { LayoutCard } from "./LayoutCard";

const layouts = [
  { id: "single", title: "Single Column" },
  { id: "sidebar", title: "Sidebar" },
  { id: "grid", title: "Grid" },
  { id: "two-column", title: "Two Columns" },
  { id: "header-two", title: "Header with Two Columns" },
  { id: "three-column", title: "Three Columns" },
];

const useStyles = makeStyles({
  dialogContent: {
    padding: "24px !important",
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
    maxHeight: "90vh", // Limit the height to 80% of the viewport height
    overflowY: "auto", // Allow scrolling inside the dialog if content overflows
  },
  dialogTitle: {
    fontSize: "24px !important",
    fontWeight: '600 !important',
    paddingBottom: "8px !important",
  },
  dialogDescription: {
    fontSize: "16px !important",
    color: "#6b7280 !important", // gray-500
    marginBottom: "24px !important",
  },
  layoutGrid: {
    display: "grid !important",
    gap: "16px !important",
    gridTemplateColumns: "repeat(3, 1fr) !important", // Fixed 3x3 grid layout
    marginBottom: "24px !important",
  },
  createButton: {
    background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
    color: "#ffffff !important",
    marginBottom: "20px !important",
    "&:hover": {
      opacity: 0.9,
      background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    },
    transition: "opacity 0.2s !important",
  },
  cancelButton: {
    borderColor: "#d1d5db !important", // gray-300
    color: "#111827 !important", // gray-900
    marginBottom: "20px !important",
    "&:hover": {
      backgroundColor: "rgba(37,99,235,0.08)",
      borderColor: "#2563eb",
    },
    transition: "all 0.2s !important",
  },
});

export const LayoutSelector = ({ open, onOpenChange, templateTitle }) => {
  const classes = useStyles();
  const [selectedLayout, setSelectedLayout] = useState("sidebar");

  const handleCreate = () => {
    const layoutName = layouts.find((l) => l.id === selectedLayout)?.title;
    toast.success(`Creating "${templateTitle}" with ${layoutName} layout`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onClose={() => onOpenChange(false)} maxWidth="sm" fullWidth>
      <DialogContent className={classes.dialogContent}>
        <DialogTitle className={classes.dialogTitle}>
          Choose Your Resume Template
        </DialogTitle>
        <Typography className={classes.dialogDescription}>
          Choose a design that best fits your style
        </Typography>

        <div className={classes.layoutGrid}>
          {layouts.map((layout) => (
            <LayoutCard
              key={layout.id}
              title={layout.title}
              layoutType={layout.id}
              isSelected={selectedLayout === layout.id}
              onClick={() => setSelectedLayout(layout.id)}
            />
          ))}
        </div>

        <DialogActions>
          <Button
            variant="outlined"
            className={classes.cancelButton}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button className={classes.createButton} onClick={handleCreate}>
            Create
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
