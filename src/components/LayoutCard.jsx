import React from "react";
import { makeStyles } from "@mui/styles";
import { Check } from "lucide-react";

const useStyles = makeStyles({
  cardButton: {
    position: "relative !important",
    borderRadius: "12px !important",
    overflow: "hidden !important",
    backgroundColor: "#ffffff !important",
    border: "2px solid #d1d5db !important",
    transition: "all 0.3s !important",
    cursor: "pointer !important",
    "&:hover": {
      borderColor: "#2563eb !important",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
    },
  },
  selected: {
    borderColor: "#2563eb !important",
    boxShadow: "0 0 12px rgba(37,99,235,0.6) !important",
  },
  layoutContainer: {
    position: "relative !important",
    paddingTop: "75% !important", // 4:3 aspect ratio
  },
  layoutVisualWrapper: {
    position: "absolute !important",
    top: "0 !important",
    left: "0 !important",
    width: "100% !important",
    height: "100% !important",
    padding: "16px !important",
    display: "flex !important",
    flexDirection: "column !important",
    gap: "12px !important",
    boxSizing: "border-box !important",
  },
  baseBlock: {
    borderRadius: "4px !important",
    backgroundColor: "rgba(156,163,175,0.4) !important", // muted/40
    border: "1px solid rgba(209,213,219,0.5) !important", // border/50
  },
  checkmarkWrapper: {
    position: "absolute !important",
    top: "12px !important",
    right: "12px !important",
    width: "28px !important",
    height: "28px !important",
    borderRadius: "50% !important",
    backgroundColor: "#2563eb !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    animation: "$scaleIn 0.2s ease-out !important",
  },
  titleWrapper: {
    padding: "16px !important",
    borderTop: "1px solid rgba(209,213,219,0.5) !important",
    textAlign: "center !important",
  },
  titleText: {
    fontWeight: '500 !important',
    color: "#111827 !important",
  },
  // Layout types
  singleLayout: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    height: "100% !important",
    "& $layoutBlock": {
      width: "75% !important",
      height: "100% !important",
    },
  },
  sidebarLayout: {
    display: "flex !important",
    gap: "12px !important",
    height: "100% !important",
    "& $layoutBlock:first-child": {
      width: "40% !important",
      height: "100% !important",
    },
    "& $layoutBlock:last-child": {
      flex: '1 !important',
      height: "100% !important",
    },
  },
  gridLayout: {
    display: "grid !important",
    gridTemplateColumns: "1fr 1fr !important",
    gap: "12px !important",
    height: "100% !important",
    "& $layoutBlock": {
      height: "80px !important",
    },
  },
  twoColumnLayout: {
    display: "flex !important",
    gap: "12px !important",
    height: "100% !important",
    "& $layoutBlock": {
      flex: '1 !important',
      height: "100% !important",
    },
  },
  headerTwoLayout: {
    display: "flex !important",
    flexDirection: "column !important",
    gap: "12px !important",
    height: "100% !important",
    "& $layoutBlock:first-child": {
      width: "100% !important",
      height: "40px !important",
    },
    "& $row": {
      display: "flex !important",
      gap: "12px !important",
      flex: '1 !important',
    },
    "& $row $layoutBlock": {
      flex: '1 !important',
      height: "100% !important",
    },
  },
  threeColumnLayout: {
    display: "flex !important",
    gap: "8px !important",
    height: "100% !important",
    "& $layoutBlock": {
      flex: '1 !important',
      height: "100% !important",
    },
  },
  layoutBlock: {},
  row: {},
  "@keyframes scaleIn": {
    "0%": { transform: "scale(0) !important" },
    "100%": { transform: "scale(1) !important" },
  },
});

const LayoutVisual = ({ type }) => {
  const classes = useStyles();

  switch (type) {
    case "single":
      return (
        <div className={classes.singleLayout}>
          <div className={classes.layoutBlock} />
        </div>
      );
    case "sidebar":
      return (
        <div className={classes.sidebarLayout}>
          <div className={classes.layoutBlock} />
          <div className={classes.layoutBlock} />
        </div>
      );
    case "grid":
      return (
        <div className={classes.gridLayout}>
          <div className={classes.layoutBlock} />
          <div className={classes.layoutBlock} />
          <div className={classes.layoutBlock} />
          <div className={classes.layoutBlock} />
        </div>
      );
    case "two-column":
      return (
        <div className={classes.twoColumnLayout}>
          <div className={classes.layoutBlock} />
          <div className={classes.layoutBlock} />
        </div>
      );
    case "header-two":
      return (
        <div className={classes.headerTwoLayout}>
          <div className={classes.layoutBlock} />
          <div className={classes.row}>
            <div className={classes.layoutBlock} />
            <div className={classes.layoutBlock} />
          </div>
        </div>
      );
    case "three-column":
      return (
        <div className={classes.threeColumnLayout}>
          <div className={classes.layoutBlock} />
          <div className={classes.layoutBlock} />
          <div className={classes.layoutBlock} />
        </div>
      );
    default:
      return null;
  }
};

export const LayoutCard = ({ title, layoutType, isSelected, onClick }) => {
  const classes = useStyles();

  return (
    <button
      onClick={onClick}
      className={`${classes.cardButton} ${isSelected ? classes.selected : ""}`}
    >
      <div className={classes.layoutContainer}>
        <div className={classes.layoutVisualWrapper}>
          <LayoutVisual type={layoutType} />
        </div>

        {isSelected && (
          <div className={classes.checkmarkWrapper}>
            <Check size={16} color="#ffffff" strokeWidth={3} />
          </div>
        )}
      </div>

      <div className={classes.titleWrapper}>
        <h3 className={classes.titleText}>{title}</h3>
      </div>
    </button>
  );
};
