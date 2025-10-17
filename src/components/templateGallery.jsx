// src/components/TemplateGallery.jsx
import React, { useState } from "react";
import { TemplateCard } from "./TemplateCard";
import { CategoryFilter } from "./CategoryFilter";
import { LayoutSelector } from "./LayoutSelector";
import { FileText, Sparkles } from "lucide-react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Container, Grid, Button } from "@mui/material";

const templates = [
  {
    id: 1,
    title: "Modern Professional",
    category: "Modern",
    description:
      "Clean and contemporary design perfect for tech and creative roles",
    image: "/template1.jpg",
    isPopular: true,
  },
  {
    id: 2,
    title: "Classic Executive",
    category: "Professional",
    description:
      "Traditional layout ideal for corporate and senior positions",
    image: "/template2.jpg",
    isPopular: true,
  },
  {
    id: 3,
    title: "Creative Designer",
    category: "Creative",
    description:
      "Bold and unique template for designers and creatives",
    image: "/template3.jpg",
    isPopular: false,
  },
  {
    id: 4,
    title: "Minimal Clean",
    category: "Minimal",
    description:
      "Simple and elegant design that highlights your content",
    image: "/template4.jpg",
    isPopular: false,
  },
  {
    id: 5,
    title: "Executive Leader",
    category: "Professional",
    description:
      "Sophisticated design for C-level and leadership roles",
    image: "/template5.jpg",
    isPopular: false,
  },
  {
    id: 6,
    title: "Tech Developer",
    category: "Modern",
    description:
      "Developer-focused template with tech stack showcase",
    image: "/template6.jpg",
    isPopular: true,
  },
];

const categories = ["All", "Modern", "Professional", "Creative", "Minimal"];

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%) !important",
  },
  heroSection: {
    position: "relative !important",
    textAlign: "center !important",
    color: "#ffffff !important",
    background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
    overflow: "hidden !important",
    paddingTop: "120px !important",
    paddingBottom: "120px !important",
  },
  heroBgPattern: {
    position: "absolute !important",
    inset: '0 !important',
    opacity: '0.1 !important',
    backgroundImage:
      "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')",
    backgroundRepeat: "repeat !important",
  },
  heroContent: {
    position: "relative !important",
    zIndex: '10 !important',
    // maxWidth: "768px !important",
    // margin: "0 auto !important",
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    gap: "24px !important",
  },
  heroIcons: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    gap: "8px !important" ,
    marginBottom: "16px !important",
  },
  heroTitle: {
    fontSize: "3rem !important",
    fontWeight: '700 !important',
    lineHeight: '1.2 !important',
  },
  heroSubtitle: {
    fontSize: "1.125rem !important",
    color: "rgba(255,255,255,0.9) !important",
    maxWidth: "760px !important",
  },
  templatesGrid: {
    justifyContent: "center !important",
    // marginTop: "32px !important",
  },
  noTemplatesText: {
    textAlign: "center !important",
    padding: "80px 0 !important",
    color: "#6b7280 !important",
    fontSize: "1.125rem !important",
  },
  section1: {
    paddingTop: "20px !important",
    // gap: "16px !important",
    justifyItems: "space-around !important",
    // paddingBottom: "48px !important",
  },
  section2: {
    paddingTop: "20px !important",
    gap: "16px !important",
    justifyContent: "center !important",
    // paddingBottom: "48px !important",
  },
});

const TemplateGallery = () => {
  const classes = useStyles();
  const [activeCategory, setActiveCategory] = useState("All");
  const [layoutDialogOpen, setLayoutDialogOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(""); // ✅ Fixed here

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  const handleUseTemplate = (templateTitle) => {
    setSelectedTemplate(templateTitle);
    setLayoutDialogOpen(true);
  };

  return (
    <Box className={classes.root}>
      {/* Hero Section */}
      <Box className={classes.heroSection}>
        <Box className={classes.heroBgPattern} />
        <Container className={classes.heroContent}>
          <Box className={classes.heroIcons}>
            <FileText size={32} />
            <Sparkles size={24} color="#fbbf24" />
          </Box>
          <Typography className={classes.heroTitle}>
            Choose Your Perfect Resume Template
          </Typography>
          <Typography className={classes.heroSubtitle}>
            Professional, ATS-friendly templates designed to help you land your
            dream job. Select a template and customize it in minutes.
          </Typography>
          {/* New "Choose Layout" Button */}
    <Button
      variant="contained"
      style={{
        marginTop: "24px",
        background: "#9a69f0ff",
        color: "#ffffff",
        padding: "12px 24px",
        fontWeight: '600',
      }}
      onClick={() => setLayoutDialogOpen(true)}
    >
      Choose Layout
    </Button>
        </Container>
      </Box>

      {/* Filter Section */}
      <Container className={classes.section1}>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </Container>

      {/* Templates Grid */}
      <Container className={classes.section2}>
        <Grid container spacing={4} className={classes.templatesGrid}>
          {filteredTemplates.map((template) => (
            <Grid item xs={12} sm={6} key={template.id}>
              <TemplateCard
                {...template}
                onUseTemplate={() => handleUseTemplate(template.title)}
              />
            </Grid>
          ))}
        </Grid>

        {filteredTemplates.length === 0 && (
          <Typography className={classes.noTemplatesText}>
            No templates found in this category.
          </Typography>
        )}
      </Container>

      {/* Layout Selector Dialog */}
      <LayoutSelector
        open={layoutDialogOpen}
        onOpenChange={setLayoutDialogOpen}
        templateTitle={selectedTemplate}
      />
    </Box>
  );
};

export default TemplateGallery;