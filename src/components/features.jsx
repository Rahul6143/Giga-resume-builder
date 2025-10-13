import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    padding: "40px 16px !important",
    backgroundColor: "#F9FAFB !important",
  },
  container: {
    maxWidth: "1280px !important",
    margin: "0 auto !important",
    padding: "0 1rem!important",
    textAlign: "center !important",   
  },
  heading: {
    fontSize: "2rem !important",
    fontWeight: '700 !important',
    marginBottom: "1rem!important",
    color: "#111827 !important",
    "@media (min-width: 1024px)": {
      fontSize: "2.5rem",
    },
  },
  featuresGrid: {
    display: "grid !important",
    gridTemplateColumns: "1fr !important",
    gap: "2rem !important",
  },
  featureCard: {
    display: "grid !important",
    gridTemplateColumns: "1fr 1fr !important",
    backgroundColor: "#FFFFFF !important",
    padding: "2rem !important",
    borderRadius: "1rem !important",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1) !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      boxShadow: "0 15px 30px rgba(0,0,0,0.15) !important",
      transform: "translateY(-4px)!important",
    },
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      textAlign: "center",
    },
  },
  featureTitle: {

    fontSize: "1.25rem !important",
    paddingTop: '2rem !important',
    fontWeight: '600 !important',
    // marginBottom: "0.75rem!important",
    color: "#111827 !important",
  },
  featureText: {
    fontSize: "1rem !important",
    color: "#4B5563 !important",
    lineHeight: '1.6 !important',
  },
  boldText: {
    textAlign: "left!important",
    fontWeight: "bold!important",
    color: "#111827!important",
  },
  list: {
    listStyleType: "circle!important",
    textAlign: "left!important",
    marginLeft: "1.5rem!important",
    color: "#374151!important",
    "& li": {
      marginBottom: "0.5rem!important",
    },
  },
  highlightCard: {
    marginTop: "3rem !important",
    background: "linear-gradient(90deg, #3B82F6, #9333EA)!important",
    color: "#FFFFFF!important",
    borderRadius: "1.5rem!important",
    padding: "2.5rem!important",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)!important",
  },
  highlightTitle: {
    fontSize: "1.5rem!important",
    fontWeight: '700 !important',
    marginBottom: "0.5rem!important",
  },
  highlightText: {
    opacity: '0.9 !important',
  },
}));

const ExclusiveFeatures = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Typography component="h2" className={classes.heading}>
          Exclusive Features of Gigaversity Resume Builder?
        </Typography>

        <div className={classes.featuresGrid}>
          {/* Feature 1 */}
          <div className={classes.featureCard}>
            <Typography className={classes.featureTitle}>
              🤖 Gen AI Skill Suggestions-With Real-World Use Cases
            </Typography>
            <Typography className={classes.featureText}>
              Stand out with in-demand Gen AI skills. Our AI engine recommends
              personalized Gen AI tools (like ChatGPT, Midjourney, Figma AI,
              Claude, Bard, DALL·E, etc.) based on your profile. You can even
              add how you’ve used these tools — for example:
            </Typography>
          </div>

          {/* Feature 2 */}
          <div className={classes.featureCard}>
            <Typography className={classes.featureText}>
              Gigaversity’s resume builder recommends portfolio-ready projects
              based on your target role—be it full stack development, data
              science, UI/UX, or product management. With one click, access our
              GitHub repository filled with real-time projects, step-by-step
              guides, and code. Build directly from your resume and showcase
              hands-on experience to employers.
            </Typography>
            <Typography className={classes.featureTitle}>
              📊 Build Projects directly From our Resume Builder
            </Typography>
          </div>

          {/* Feature 3 */}
          <div className={classes.featureCard}>
            <Typography className={classes.featureTitle}>
              📝 Smart Resume Content That Writes Itself
            </Typography>
            <Typography className={classes.featureText}>
              Gigaversity’s AI Resume Maker helps you write your resume with
              ease. It suggests role-based summaries, internship descriptions,
              strong bullet points, and the right keywords. Designed for
              freshers, the templates are professional and ATS-friendly, making
              sure your resume stands out and ranks higher with top recruiters.
            </Typography>
          </div>

          {/* Feature 4 */}
          <div className={classes.featureCard}>
            <div>
              <Typography className={classes.boldText}>
                Every template is:
              </Typography>
              <ul className={classes.list}>
                <li>Designed by experts with recruiter input</li>
                <li>
                  Clean and modern with a correct resume format for freshers and
                  professionals
                </li>
                <li>Tested for compatibility with leading ATS tools</li>
              </ul>
              <Typography className={classes.featureText}>
                So your resume doesn’t get rejected by a bot before a human even
                sees it.
              </Typography>
            </div>
            <Typography className={classes.featureTitle}>
              💼 ATS-Friendly Templates & Formats
            </Typography>
          </div>
        </div>

        {/* Highlight Card */}
        <div className={classes.highlightCard}>
          <Typography className={classes.highlightTitle}>
            ✉️ Cover Letter in One Click
          </Typography>
          <Typography className={classes.highlightText}>
            Generate a personalized, matching cover letter instantly - no extra
            effort required.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeatures;
