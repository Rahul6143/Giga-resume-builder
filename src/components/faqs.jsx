import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    padding: "40px 16px !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center !important",
    marginBottom: '64px !important',
  },
  title: {
    fontWeight: '700!important',
    fontSize: "2rem !important",
    marginBottom: '8px !important',
  },
  subtitle: {
    color: "#6B7280 !important", // gray.500
    maxWidth: '600 !important',
    margin: "0 auto",
  },
  accordionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: '16px !important',
    maxWidth: ' 700px !important',
    width: "100%",
  },
  accordion: {
    borderRadius: '16px !important',
    border: "1px solid #e5e7eb",
  },
  question: {
    fontWeight: '600!important',
    fontSize: "16px !important",
  },
  answer: {
    color: "#6B7280", // gray.500
  },
}));

const FAQSection = () => {
  const classes = useStyles();

  const faqs = [
    {
      question: "What are the best resume templates for freshers available on Gigaversity Resume Builder?",
      answer:
        "Gigaversity offers a variety of professional, recruiter-approved resume templates designed specifically for freshers. These templates follow the perfect resume format for freshers, ensuring a clean, modern look that highlights your skills, projects, and education while being fully ATS-friendly.",
    },
    {
      question: "How does Gigaversity’s free resume builder help create ATS-friendly resumes?",
      answer:
        "Our free resume builder uses expert-designed templates tested for compatibility with leading Applicant Tracking Systems (ATS). This ensures your resume passes through automated screening bots and reaches recruiters, increasing your chances of getting noticed and shortlisted.",
    },
    {
      question: "Can I use Gigaversity Resume Builder to switch careers or update my professional resume?",
      answer:
        "Yes! Gigaversity Resume Builder is perfect for professionals aiming to upgrade roles or make a career switch. It offers smart content suggestions, project recommendations, and flexible templates tailored to showcase your evolving skills and experience.",
    },
    {
      question: "How can I build portfolio-ready projects directly from my resume on Gigaversity?",
      answer:
        "Gigaversity Resume Builder recommends projects based on your target role—whether it's full stack development, data science, UI/UX, or product management. With one click, you can access our GitHub repository featuring real-time projects, step-by-step guides, and code, allowing you to build and showcase hands-on experience straight from your resume.",
    },
    {
      question: "How does Gigaversity help me showcase my Gen AI skills on my resume?",
      answer:
        "Our AI engine suggests relevant Gen AI tools like ChatGPT, Midjourney, Figma AI, Claude, Bard, and DALL·E tailored to your profile. You can add detailed descriptions of how you’ve used these tools in real-world projects, helping recruiters see your proficiency with cutting-edge AI technologies.",
    },
    {
      question: "Can Gigaversity recommend AI-powered projects that match my skills and career goals?",
      answer:
        "Yes! Based on your profile and target job role, Gigaversity’s resume builder smartly recommends AI-powered and other industry-relevant projects that you can build step-by-step. This feature helps you gain practical experience and strengthens your resume with projects aligned to your career ambitions.",
    },
    {
      question: "Is the Gigaversity Resume Builder suitable for professionals with career gaps?",
      answer:
        "Absolutely. Our resume builder helps you craft impactful resumes that highlight your skills, projects, and growth, making it ideal for individuals with career gaps who want to re-enter the job market confidently.",
    },
    {
      question: "Are Gigaversity’s resume templates recruiter-approved and optimized for top ATS tools?",
      answer:
        "Yes, every template is designed with input from recruiters and thoroughly tested to ensure compatibility with leading ATS software. This increases your chances of passing automated screenings and getting your resume seen by hiring managers.",
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.header}>
        <Typography className={classes.title} variant="h4">
          Frequently Asked Questions
        </Typography>
        <Typography className={classes.subtitle}>
          Got questions? We've got answers.
        </Typography>
      </Box>

      <Box className={classes.accordionContainer}>
        {faqs.map((faq, index) => (
          <Accordion key={index} className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.question}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.answer}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
