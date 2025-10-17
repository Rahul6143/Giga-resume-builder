import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, FileText } from "lucide-react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#0f172a !important", // slate-950
    overflow: "hidden !important",
  },
  sectionWrapper: {
    minHeight: "100vh",
    padding: "6rem 0 !important",
  },
  sectionHeader: {
    textAlign: "center !important",
    marginBottom: "5rem !important",
  },
  sectionTitle: {
    fontSize: "3rem !important",
    fontWeight: '800 !important',
    color: "#ffffff !important",
    marginBottom: "1rem !important",
  },
  gradientText: {
    background: "linear-gradient(90deg, #fb7185, #fb923c, #fbbf24) !important",
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
  },
  sectionSubtitle: {
    color: "#94a3b8 !important",
    fontSize: "1.2rem !important",
  },
  diagonalContainer: {
    maxWidth: "1200px !important",
    margin: "0 auto !important",
    padding: "8rem 1.5rem !important",
    display: "flex !important",
    alignItems: "center !important",
    gap: "3rem !important",
  },
  featureCard: {
    position: "relative !important",
    width: "10rem !important",
    height: "10rem !important",
    borderRadius: "24px !important",
    background: "rgba(255,255,255,0.1) !important",
    backdropFilter: "blur(12px) !important",
    border: "1px solid rgba(255,255,255,0.2) !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    boxShadow: "0 0 40px rgba(0,0,0,0.4) !important",
    zIndex: '2 !important',
  },
  featureTitle: {
    fontSize: "3rem !important",
    fontWeight: '900 !important',
    color: "#ffffff !important",
    marginBottom: "0.5rem !important",
  },
  featureSubtitle: {
    fontSize: "1.5rem !important",
    fontWeight: '700 !important',
    marginBottom: "1.5rem !important",
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
  },
  featureDescription: {
    color: "#e2e8f0 !important",
    fontSize: "1.2rem !important",
    lineHeight: '1.7 !important',
    maxWidth: "40rem !important",
  },
}));

export default function ExclusiveFeatures() {
  const classes = useStyles();

  const features = [
    {
      icon: Sparkles,
      title: "Gen AI Skill Suggestions",
      subtitle: "With Real-World Use Cases",
      description:
        "Our resume builder analyzes your job role and recommends relevant Gen AI tools like ChatGPT, Midjourney, Figma AI, Bard, and more. It automatically generates how these tools are used—like automating workflows, enhancing design, or improving productivity—so you can show real-world impact.",
      bgColor: "linear-gradient(135deg, #0f172a, #1e3a8a)", // slate-900 → blue-950
      accentColor: "linear-gradient(135deg, #fb7185, #fb923c)", // rose → orange
    },
    {
      icon: Layers,
      title: "Build Projects Directly",
      subtitle: "From Our Resume Builder",
      description:
        "Our platform recommends job-specific projects aligned with your target role—like full stack, data science, UI/UX, or product management. You get GitHub repos with full instructions, allowing you to build and showcase relevant projects that strengthen your credibility.",
      bgColor: "linear-gradient(135deg, #1e3a8a, #4c1d95)", // blue-950 → purple-950
      accentColor: "linear-gradient(135deg, #fbbf24, #fb7185)", // amber → rose
    },
    {
      icon: FileText,
      title: "Smart Resume Content",
      subtitle: "That Writes Itself",
      description:
        "Create a standout resume with AI-powered suggestions tailored to your role. Get pre-written summaries, impactful bullet points, and ATS-optimized keywords—perfect for highlighting your strengths and improving visibility.",
      bgColor: "linear-gradient(135deg, #4c1d95, #0f172a)", // purple-950 → slate-900
      accentColor: "linear-gradient(135deg, #ec4899, #fb7185)", // pink → rose
    },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.sectionWrapper}>
        <Box className={classes.sectionHeader}>
          <Typography className={classes.sectionTitle}>
            Exclusive Features of <span className={classes.gradientText}>Giga Resume Builder</span>
          </Typography>
        </Box>

        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isReversed = index % 2 === 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                background: feature.bgColor,
                clipPath:
                  index % 2 === 0
                    ? "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                    : "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
                marginTop: index === 0 ? 0 : "-80px",
              }}
            >
              <Box
                className={classes.diagonalContainer}
                sx={{
                  flexDirection: { xs: "column", md: isReversed ? "row-reverse" : "row" },
                }}
              >
                <motion.div whileHover={{ scale: 1.05, rotate: 5 }}>
                  <Box
                    className={classes.featureCard}
                    sx={{
                      "& svg": { width: "80px", height: "80px", color: "#ffffff" },
                    }}
                  >
                    <Icon strokeWidth={1.5} />
                  </Box>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: isReversed ? 50 : -50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Typography className={classes.featureTitle}>
                    {feature.title}
                  </Typography>
                  <Typography
                    className={classes.featureSubtitle}
                    sx={{
                      background: feature.accentColor,
                    }}
                  >
                    {feature.subtitle}
                  </Typography>
                  <Typography className={classes.featureDescription}>
                    {feature.description}
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
}


// ---------------------------------------------------------------------------------

// import React from "react";
// import { Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   section: {
//     paddingLeft: "16px",
//     paddingRight: "16px",
//     paddingBottom: "40px !important",
//     paddingTop: '65px !important',
//     backgroundColor: "#F9FAFB !important",
//   },
//   container: {
//     maxWidth: "1280px !important",
//     margin: "0 auto !important",
//     padding: "0 1rem!important",
//     textAlign: "center !important",   
//   },
//   heading: {
//     fontSize: "2rem !important",
//     fontWeight: '700 !important',
//     marginBottom: "1rem!important",
//     color: "#111827 !important",
//     "@media (min-width: 1024px)": {
//       fontSize: "2.5rem",
//     },
//   },
//   featuresGrid: {
//     display: "grid !important",
//     gridTemplateColumns: "1fr !important",
//     gap: "2rem !important",
//   },
//   featureCard: {
//     display: "grid !important",
//     gridTemplateColumns: "1fr 1fr !important",
//     backgroundColor: "#FFFFFF !important",
//     padding: "2rem !important",
//     borderRadius: "1rem !important",
//     boxShadow: "0 10px 20px rgba(0,0,0,0.1) !important",
//     transition: "all 0.3s ease !important",
//     "&:hover": {
//       boxShadow: "0 15px 30px rgba(0,0,0,0.15) !important",
//       transform: "translateY(-4px)!important",
//     },
//     "@media (max-width: 1024px)": {
//       gridTemplateColumns: "1fr",
//       textAlign: "center",
//     },
//   },
//   featureTitle: {

//     fontSize: "1.25rem !important",
//     paddingTop: '2rem !important',
//     fontWeight: '600 !important',
//     // marginBottom: "0.75rem!important",
//     color: "#111827 !important",
//   },
//   featureText: {
//     fontSize: "1rem !important",
//     color: "#4B5563 !important",
//     lineHeight: '1.6 !important',
//   },
//   boldText: {
//     textAlign: "left!important",
//     fontWeight: "bold!important",
//     color: "#111827!important",
//   },
//   list: {
//     listStyleType: "circle!important",
//     textAlign: "left!important",
//     marginLeft: "1.5rem!important",
//     color: "#374151!important",
//     "& li": {
//       marginBottom: "0.5rem!important",
//     },
//   },
// }));

// const ExclusiveFeatures = () => {
//   const classes = useStyles();

//   return (
//     <section className={classes.section}>
//       <div className={classes.container}>
//         <Typography component="h2" className={classes.heading}>
//           Exclusive Features of Gigaversity Resume Builder?
//         </Typography>

//         <div className={classes.featuresGrid}>
//           {/* Feature 1 */}
//           <div className={classes.featureCard}>
//             <Typography className={classes.featureTitle}>
//               Gen AI Skill Suggestions-With Real-World Use Cases
//             </Typography>
//             <Typography className={classes.featureText}>
//               Stand out with in-demand Gen AI skills. Our AI engine recommends
//               personalized Gen AI tools (like ChatGPT, Midjourney, Figma AI,
//               Claude, Bard, DALL·E, etc.) based on your profile. You can even
//               add how you’ve used these tools — for example:
//             </Typography>
//           </div>

//           {/* Feature 2 */}
//           <div className={classes.featureCard}>
//             <Typography className={classes.featureText}>
//               Gigaversity’s resume builder recommends portfolio-ready projects
//               based on your target role—be it full stack development, data
//               science, UI/UX, or product management. With one click, access our
//               GitHub repository filled with real-time projects, step-by-step
//               guides, and code. Build directly from your resume and showcase
//               hands-on experience to employers.
//             </Typography>
//             <Typography className={classes.featureTitle}>
//               Build Projects directly From our Resume Builder
//             </Typography>
//           </div>

//           {/* Feature 3 */}
//           <div className={classes.featureCard}>
//             <Typography className={classes.featureTitle}>
//               Smart Resume Content That Writes Itself
//             </Typography>
//             <Typography className={classes.featureText}>
//               Gigaversity’s AI Resume Maker helps you write your resume with
//               ease. It suggests role-based summaries, internship descriptions,
//               strong bullet points, and the right keywords. Designed for
//               freshers, the templates are professional and ATS-friendly, making
//               sure your resume stands out and ranks higher with top recruiters.
//             </Typography>
//           </div>

//           </div>
        
//       </div>
//     </section>
//   );
// };

// export default ExclusiveFeatures;
