// src/components/LayoutSelector.jsx
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
    maxWidth: "960px !important",
    maxHeight: "90vh !important",
    overflowY: "auto !important",
    padding: "24px !important",
  },
  dialogTitle: {
    fontSize: "24px !important",
    fontWeight: '600 !important',
    marginBottom: "8px !important",
  },
  dialogDescription: {
    fontSize: "16px !important",
    color: "#6b7280 !important", // gray-500
    marginBottom: "24px !important",
  },
  layoutGrid: {
    display: "grid!important",
    gap: "16px !important",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr)) !important",
    marginBottom: "24px !important",
  },
  createButton: {
    background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
    color: "#ffffff !important",
    "&:hover": {
      opacity: 0.9,
      background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    },
    transition: "opacity 0.2s !important",
  },
  cancelButton: {
    borderColor: "#d1d5db !important", // gray-300
    color: "#111827 !important", // gray-900
    "&:hover": {
      backgroundColor: "rgba(37,99,235,0.08)",
      borderColor: "#2563eb",
    },
    transition: "all 0.2s !important",
  },
});

export const LayoutSelector = ({ open, onOpenChange, templateTitle }) => {
  const classes = useStyles();
  const [selectedLayout, setSelectedLayout] = useState("sidebar"); // ✅ remove <LayoutType>

  const handleCreate = () => {
    const layoutName = layouts.find((l) => l.id === selectedLayout)?.title;
    toast.success(`Creating "${templateTitle}" with ${layoutName} layout`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onClose={() => onOpenChange(false)} maxWidth="lg" fullWidth>
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
