import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  Divider,
} from "@mui/material";
import {
  CheckCircle2,
  Lightbulb,
  FileText,
  Eye,
  Briefcase,
  // ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

// STYLES
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(135deg, #0A2463, #0D2D6C, #1E3A8A)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: "1rem",
    // flexWrap: "wrap",
  },
  heroSection: {
    color: "#FFFFFF",
    flex: "1 1 48%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  logoContainer: {
    display: "flex",
    paddingTop: "1.5rem",
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
    fontWeight: '700 !important',
    lineHeight: '1.2 !important',
    fontSize: "2.5rem !important",
  },
  subText: {
    color: "#BFDBFE",
    fontSize: "1.2rem",
    marginTop: "0.5rem !important",
    marginBottom: "0.6rem !important",
  },
  featuresWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
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
  // ctaButton: {
  //   backgroundColor: "#EAB308",
  //   color: "#000000",
  //   fontWeight: 600,
  //   fontSize: "1rem",
  //   padding: "1rem 2rem",
  //   borderRadius: "12px",
  //   boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
  //   "&:hover": {
  //     backgroundColor: "#CA8A04",
  //     transform: "scale(1.05)",
  //     transition: "0.3s",
  //   },
  // },
  ctaSub: {
    color: "#93C5FD",
    marginTop: "0.9rem !important",
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
    margin: "1rem 0",
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
    fontWeight: '600 !important',
    fontSize: "17px !important",
    marginTop: "1rem !important", 
    padding: "10px !important",
    borderRadius: "12px !important",
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
    { icon: Lightbulb, text: "Project Recommendations", color: "blue" },
    { icon: Eye, text: "Real-time Preview", color: "yellow" },
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
        {/* LEFT: Hero Section */}
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
              Launch your career with
              <span style={{ color: "#FFFFFF" }}> Giga Resume </span>
              <span style={{ color: "#EAB308" }}>Builder</span>
            </Typography>
            <Typography className={classes.subText}>
              Write your first career chapter —{" "}
              <span style={{ color: "#EAB308", fontWeight: 600 }}>For Free</span>
            </Typography>
          </Box>

          {/* Features */}
          <Box>
            <Typography style={{ color: "#BFDBFE", fontWeight: '600', paddingBottom: '0.7em' }}>
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
            {/* <Button className={classes.ctaButton} onClick={handleGoogle}>
              Get Started Now <ArrowRight size={20} style={{ marginLeft: "8px" }} />
            </Button> */}
            <Typography className={classes.ctaSub}>
              Join thousands building their dream careers NOW
            </Typography>
          </motion.div>
        </motion.div>

        {/* RIGHT: Sign Up Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={classes.formSection}
        >
          <Card className={classes.card}>
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
              {/* Google Button */}
              <Button
                variant="outlined"
                fullWidth
                style={{
                  borderRadius: "12px",
                  padding: "1rem",
                  marginTop: "10px",
                  border: "2px solid #E5E7EB",
                  color: "#374151",
                }}
                onClick={handleGoogle}
              >
                Continue with Google
              </Button>

              {/* Divider */}
              <Box className={classes.dividerWrap}>
                <Divider />
                <span>or</span>
              </Box>

              {/* Inputs */}
              <Box display="flex" flexDirection="column" gap="10px">
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
                  {/* <IconButton
                    className={classes.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </IconButton> */}
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
                  {/* <IconButton
                    className={classes.passwordToggle}
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </IconButton> */}
                </Box>
              </Box>

              {/* Submit */}
              <Button type="submit" className={classes.submitBtn}>
                Sign Up
              </Button>

              <Typography className={classes.loginText}>
                Already have an account?
                <Button onClick={handleGoogle} className={classes.loginButton} disableRipple>
                  Log in
                </Button>
              </Typography>
            </form>
          </Card>
        </motion.div>
      </Box>

      {/* Background circles */}
      <div className={classes.decoYellow}></div>
      <div className={classes.decoBlue}></div>
    </Box>
  );
};

export default Landing;
