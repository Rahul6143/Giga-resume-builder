import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Badge, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";


const useStyles = makeStyles({
  card: {
    position: "relative !important",
    height: "600px !important",
    width: "300px !important",
    borderRadius: "12px !important",
    backgroundColor: "#ffffffff !important",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06) !important",
    transition: "all 0.3s !important",
    cursor: "pointer !important",
    "&:hover": {
      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
      transform: "translateY(-4px)",
    },
    display: "flex !important",
    flexDirection: "column !important",
  },
  imageWrapper: {
    position: "relative !important",
    width: "100% !important",
    
    paddingTop: "133.33% !important", // 3/4 aspect ratio
    "& img": {
      position: "absolute !important",
      backgroundColor: "#88a7e6ff !important",
      top: '0 !important',
      left: '0 !important',
      width: "100% !important",
      height: "100% !important",
      // objectFit: "none !important",
      transition: "transform 0.5s !important",
    },
    "&:hover img": {
      transform: "scale(1.05)",
    },
  },
  popularBadge: {
    position: "absolute !important",
    fontFamily: "'Roboto', sans-serif !important",
    top: "12px !important",
    right: "12px !important",
    background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
    color: "#ffffff !important",
    border: "none !important",
    fontWeight: ' 500 !important',
    padding: "2px 8px !important",
    borderRadius: "12px !important",
    fontSize: "0.75rem !important",
  },
  content: {
    padding: "20px !important",
    display: "flex !important",
    flexDirection: "column !important",
    gap: "12px !important",
    flex: '1 !important',
  },
  categoryBadge: {
    fontFamily: "'Roboto', sans-serif !important",
    fontSize: "0.75rem !important",
    fontWeight: '500 !important',
    backgroundColor: "#e5e7eb !important", // gray-200
    color: "#374151 !important", // gray-700
    padding: "2px 8px !important",
    borderRadius: "8px !important",
  },
  title: {
    fontWeight: '600 !important',
    fontSize: "1.125rem !important",
    color: "#111827 !important", // gray-900
    marginBottom: "4px !important",
  },
  description: {
    fontSize: "0.875rem !important",
    color: "#6b7280 !important", // gray-500
    display: "-webkit-box !important",
    WebkitLineClamp: '2 !important',
    WebkitBoxOrient: "vertical !important",
    overflow: "hidden !important",
  },
  useButton: {
    width: "100% !important",
    background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
    color: "#ffffff !important",
    fontWeight: '500 !important',
    textTransform: "none !important",
    "&:hover": {
      opacity: '0.9 !important',
      background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
    },
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    gap: "8px !important",
    transition: "opacity 0.2s, transform 0.2s !important",
  },
});

export const TemplateCard = ({
  title,
  category,
  description,
  image,
  isPopular,
  onUseTemplate,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        <img src={image} alt={`${title} resume template`} />
        {isPopular && <div className={classes.popularBadge}>Popular</div>}
      </div>

      <div className={classes.content}>
        <div>
          <Badge className={classes.categoryBadge}>{category}</Badge>
        </div>

        <div>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.description}>{description}</Typography>
        </div>

        <Button className={classes.useButton} onClick={onUseTemplate}>
          Use Template <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};
