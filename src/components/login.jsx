import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  Divider,
  IconButton,
} from "@mui/material";
import {
  CheckCircle2,
  Lightbulb,
  FileText,
  Eye,
  EyeOff,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0A2463, #0D2D6C, #1E3A8A)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "3rem",
    flexWrap: "wrap",
  },
  heroSection: {
    color: "#FFFFFF",
    flex: "1 1 48%",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
  logoBox: {
    width: "48px",
    height: "48px",
    backgroundColor: "#EAB308",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: "2.5rem",
  },
  subText: {
    color: "#BFDBFE",
    fontSize: "1.2rem",
  },
  featuresWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  featureCard: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "1rem",
    border: "1px solid rgba(255,255,255,0.1)",
    flex: "1 1 45%",
    transition: "0.3s",
    "&:hover": {
      background: "rgba(255,255,255,0.15)",
    },
  },
  iconBoxYellow: {
    backgroundColor: "#EAB308",
    borderRadius: "8px",
    padding: "0.5rem",
    display: "flex",
  },
  iconBoxBlue: {
    backgroundColor: "#60A5FA",
    borderRadius: "8px",
    padding: "0.5rem",
    display: "flex",
  },
  ctaButton: {
    backgroundColor: "#EAB308",
    color: "#000000",
    fontWeight: 600,
    fontSize: "1rem",
    padding: "1rem 2rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
    "&:hover": {
      backgroundColor: "#CA8A04",
      transform: "scale(1.05)",
      transition: "0.3s",
    },
  },
  ctaSub: {
    color: "#93C5FD",
    marginTop: "0.5rem",
  },
  formSection: {
    flex: "1 1 45%",
  },
  card: {
    borderRadius: "24px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
    padding: "2rem",
  },
  formHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "1rem",
  },
  sparkIconBox: {
    width: "40px",
    height: "40px",
    backgroundColor: "#DBEAFE",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dividerWrap: {
    position: "relative",
    margin: "2rem 0",
    "& span": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#FFFFFF",
      padding: "0 0.5rem",
      color: "#9CA3AF",
      fontSize: "0.9rem",
    },
  },
  textField: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
    },
  },
  passwordToggle: {
    position: "absolute",
    right: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9CA3AF",
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "#0A2463",
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: "1rem",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "#0D2D6C",
    },
  },
  loginText: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
  loginButton: {
    color: "#2563EB",
    fontWeight: 600,
    marginLeft: "0.3rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  decoYellow: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "400px",
    height: "400px",
    backgroundColor: "rgba(234,179,8,0.1)",
    borderRadius: "50%",
    filter: "blur(120px)",
    zIndex: -1,
  },
  decoBlue: {
    position: "fixed",
    bottom: 0,
    right: 0,
    width: "400px",
    height: "400px",
    backgroundColor: "rgba(59,130,246,0.1)",
    borderRadius: "50%",
    filter: "blur(120px)",
    zIndex: -1,
  },
});

const Landing = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const features = [
    { icon: CheckCircle2, text: "ATS Friendly", color: "yellow" },
    { icon: Sparkles, text: "GenAI Recommendations", color: "blue" },
    { icon: Lightbulb, text: "Project Recommendations", color: "yellow" },
    { icon: Eye, text: "Real-time Preview", color: "blue" },
    { icon: FileText, text: "Recruiter-approved Templates", color: "yellow" },
    { icon: Briefcase, text: "Build portfolio projects directly", color: "blue" },
  ];

  const handleGoogle = () => alert("Google Sign Up Clicked");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={classes.heroSection}
        >
          {/* Logo */}
          <Box className={classes.logoContainer}>
            <Box className={classes.logoBox}>
              <Briefcase color="#FFFFFF" size={28} />
            </Box>
            <Typography variant="h5" fontWeight={700}>
              Gigaversity
            </Typography>
          </Box>

          {/* Heading */}
          <Box>
            <Typography className={classes.heading}>
              Launch your career with <br />
              <span style={{ color: "#FFFFFF" }}>Giga Resume </span>
              <span style={{ color: "#EAB308" }}>Builder</span>
            </Typography>
            <Typography className={classes.subText}>
              Write your first career chapter —{" "}
              <span style={{ color: "#EAB308", fontWeight: 600 }}>For Free</span>
            </Typography>
          </Box>

          {/* Features */}
          <Box>
            <Typography style={{ color: "#BFDBFE", fontWeight: 600 }}>
              Exclusive features:
            </Typography>
            <Box className={classes.featuresWrap}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className={classes.featureCard}
                >
                  <Box
                    className={
                      f.color === "yellow"
                        ? classes.iconBoxYellow
                        : classes.iconBoxBlue
                    }
                  >
                    <f.icon color="#FFFFFF" size={20} />
                  </Box>
                  <Typography>{f.text}</Typography>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button className={classes.ctaButton} onClick={handleGoogle}>
              Get Started Now <ArrowRight size={20} style={{ marginLeft: "8px" }} />
            </Button>
            <Typography className={classes.ctaSub}>
              Join thousands building their dream careers
            </Typography>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={classes.formSection}
        >
          <Card className={classes.card}>
            {/* Header */}
            <Box className={classes.formHeader}>
              <Box className={classes.sparkIconBox}>
                <Sparkles color="#2563EB" size={20} />
              </Box>
              <Typography variant="h5" fontWeight={700} color="#111827">
                Sign Up
              </Typography>
            </Box>
            <Typography color="#6B7280">Create your account to get started</Typography>

            <form onSubmit={handleSubmit}>
              {/* Google */}
              <Button
                variant="outlined"
                fullWidth
                style={{
                  borderRadius: "12px",
                  padding: "1rem",
                  marginTop: "1.5rem",
                  border: "2px solid #E5E7EB",
                  color: "#374151",
                }}
                onClick={handleGoogle}
              >
                <svg
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              {/* Divider */}
              <Box className={classes.dividerWrap}>
                <Divider />
                <span>or</span>
              </Box>

              {/* Inputs */}
              <Box display="flex" flexDirection="column" gap="1rem">
                <TextField
                  variant="outlined"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={classes.textField}
                />

                <Box position="relative">
                  <TextField
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className={classes.textField}
                  />
                  <IconButton
                    className={classes.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </IconButton>
                </Box>

                <Box position="relative">
                  <TextField
                    variant="outlined"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
                    className={classes.textField}
                  />
                  <IconButton
                    className={classes.passwordToggle}
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </IconButton>
                </Box>
              </Box>

              {/* Submit */}
              <Button type="submit" className={classes.submitBtn}>
                Sign Up
              </Button>

              <Typography className={classes.loginText}>
                Already have an account?
                <Button
                  onClick={handleGoogle}
                  className={classes.loginButton}
                  disableRipple
                >
                  Log in
                </Button>
              </Typography>
            </form>
          </Card>
        </motion.div>
      </Box>

      {/* Decorative Circles */}
      <div className={classes.decoYellow}></div>
      <div className={classes.decoBlue}></div>
    </Box>
  );
};

export default Landing;
