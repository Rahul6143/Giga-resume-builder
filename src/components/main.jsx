import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import BuildIcon from "@mui/icons-material/Build";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    color: "#1F2937",
    background: "linear-gradient(180deg,#f7fafc 0%, #ffffff 100%)",
    minHeight: "100vh",
  },
  appbar: {
    background: "transparent",
    boxShadow: 'none',
    paddingTop: 12,
    paddingBottom: 12,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  brandMark: {
    width: 44,
    height: 44,
    borderRadius: 8,
    background: 'linear-gradient(135deg,#6b21a8,#06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 700,
    boxShadow: '0 6px 18px rgba(6,182,212,0.16)',
  },
  ctaPrimary: {
    background: '#0ea5a4',
    color: '#fff',
    padding: '10px 18px',
    borderRadius: 8,
    textTransform: 'none',
    fontWeight: 600,
    '&:hover': {
      background: '#05938f',
    },
  },
  hero: {
    paddingTop: 48,
    paddingBottom: 48,
    display: 'flex',
    alignItems: 'center',
  },
  heroLeft: {
    flex: 1,
  },
  heroTitle: {
    fontSize: '2.75rem',
    lineHeight: 1.05,
    marginBottom: 16,
    color: '#0f172a',
    fontWeight: 800,
  },
  heroSubtitle: {
    fontSize: '1.05rem',
    marginBottom: 22,
    color: '#334155',
  },
  heroActions: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
  },
  heroImage: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  mockResume: {
    width: '320px',
    borderRadius: 12,
    boxShadow: '0 18px 40px rgba(15,23,42,0.08)',
    padding: 18,
    background: '#fff',
  },
  featureCard: {
    borderRadius: 12,
    boxShadow: '0 10px 30px rgba(2,6,23,0.06)',
    padding: 18,
    height: '100%',
  },
  highlights: {
    display: 'flex',
    gap: 12,
    marginTop: 18,
    flexWrap: 'wrap',
  },
  highlightChip: {
    background: '#eef2ff',
    color: '#3730a3',
    fontWeight: 600,
    borderRadius: 8,
  },
  section: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  templatesGrid: {
    marginTop: 20,
  },
  templateCard: {
    padding: 16,
    borderRadius: 10,
    minHeight: 180,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footer: {
    marginTop: 40,
    paddingTop: 30,
    paddingBottom: 30,
    borderTop: '1px solid #e6eef5',
  },
  smallMuted: {
    color: '#64748b',
  }
}));

export default function GigaversityLanding() {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <div className={classes.brandMark}>G</div>
            <div>
              <Typography variant="h6">Gigaversity</Typography>
              <Typography variant="caption" className={classes.smallMuted}>Resume Builder</Typography>
            </div>
          </div>
          <div>
            <Button size="small" style={{ textTransform: 'none', marginRight: 12 }}>Templates</Button>
            <Button size="small" style={{ textTransform: 'none', marginRight: 12 }}>How it Works</Button>
            <Button size="small" className={classes.ctaPrimary}>Create Resume</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Container>
        <section className={classes.hero}>
          <div className={classes.heroLeft}>
            <Typography className={classes.heroTitle} component="h1">
              Create a Resume That Gets You Noticed
            </Typography>
            <Typography className={classes.heroSubtitle}>
              Free Resume Builder · AI Assistance and Smart Suggestions. Build job-ready resumes in just a few clicks — recruiter-approved, ATS-friendly formats for freshers and professionals.
            </Typography>

            <div className={classes.heroActions}>
              <Button className={classes.ctaPrimary} startIcon={<PlayArrowIcon />}>Create Resume Now</Button>
              <Button variant="outlined" style={{ textTransform: 'none' }}>See Templates</Button>
            </div>

            <div className={classes.highlights}>
              <Chip label="Top Rated" className={classes.highlightChip} />
              <Chip label="Lightning Fast" className={classes.highlightChip} />
              <Chip label="Gen AI Recommendation" className={classes.highlightChip} />
              <Chip label="ATS-Friendly" className={classes.highlightChip} />
            </div>
          </div>

          <div className={classes.heroImage}>
            <div className={classes.mockResume}>
              <Typography variant="subtitle2" style={{ fontWeight: 700 }}>Jane Doe</Typography>
              <Typography variant="caption" className={classes.smallMuted}>Frontend Developer</Typography>

              <Box mt={2} mb={2}>
                <Typography variant="body2" style={{ fontWeight: 700 }}>Summary</Typography>
                <Typography variant="body2" className={classes.smallMuted}>Motivated frontend developer with internship experience building React apps and UI using Material-UI.</Typography>
              </Box>

              <Box>
                <Typography variant="body2" style={{ fontWeight: 700 }}>Skills</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="React · JavaScript · HTML/CSS" />
                  </ListItem>
                </List>
              </Box>

              <Box mt={2} display="flex" justifyContent="flex-end">
                <Button size="small" variant="outlined" style={{ textTransform: 'none' }}>Preview</Button>
              </Box>
            </div>
          </div>
        </section>

        <section className={classes.section}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card className={classes.featureCard}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <StarIcon />
                    <Typography variant="h6">Gen AI Skill Suggestions — With Real-World Use Cases</Typography>
                  </Box>
                  <Typography className={classes.smallMuted}>
                    Our AI recommends in-demand Gen AI tools (ChatGPT, Midjourney, Figma AI, Claude, Bard, DALL·E etc.) tailored to your profile — plus suggested ways to describe how you used them.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" style={{ textTransform: 'none' }}>Try Skill Suggestion</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card className={classes.featureCard}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <BuildIcon />
                    <Typography variant="h6">Build Projects Directly From the Resume Builder</Typography>
                  </Box>
                  <Typography className={classes.smallMuted}>
                    Instantly access GitHub repos with hands-on projects and guides for roles like full-stack, data science, UI/UX and product management — build and display them on your resume.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" style={{ textTransform: 'none' }}>Explore Projects</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card className={classes.featureCard}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <FlashOnIcon />
                    <Typography variant="h6">Smart Resume Content That Writes Itself</Typography>
                  </Box>
                  <Typography className={classes.smallMuted}>
                    Role-based summaries, internship descriptions, strong bullet points and ATS keywords — tailored especially for freshers and career-switchers.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" style={{ textTransform: 'none' }}>Auto-Write</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card className={classes.featureCard}>
                <CardContent>
                  <Typography variant="h6">ATS-Friendly Templates & Formats</Typography>
                  <Typography className={classes.smallMuted}>
                    Templates designed with recruiter input, tested for ATS compatibility, and structured to highlight your achievements clearly.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" style={{ textTransform: 'none' }}>Browse Templates</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </section>

        <section className={classes.section}>
          <Typography variant="h5" gutterBottom>Who is it for?</Typography>
          <Grid container spacing={3} className={classes.templatesGrid}>
            <Grid item xs={12} md={3}>
              <Card className={classes.templateCard}>
                <Typography variant="subtitle1">Students & Freshers</Typography>
                <Typography className={classes.smallMuted}>Launch your first IT career with resume templates that highlight internships, projects and skills.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card className={classes.templateCard}>
                <Typography variant="subtitle1">Working Professionals</Typography>
                <Typography className={classes.smallMuted}>Upgrade roles or switch careers with targeted templates and keyword suggestions.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card className={classes.templateCard}>
                <Typography variant="subtitle1">Career Gaps</Typography>
                <Typography className={classes.smallMuted}>Create impactful resumes that explain gaps and highlight transferable skills.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card className={classes.templateCard}>
                <Typography variant="subtitle1">Tech Enthusiasts</Typography>
                <Typography className={classes.smallMuted}>Showcase Gen AI and project skills to stand out for modern tech roles.</Typography>
              </Card>
            </Grid>
          </Grid>
        </section>

        <section className={classes.section}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h5">Giga Resume — The smarter way to build a resume in 2025</Typography>
              <Typography className={classes.smallMuted} style={{ marginTop: 8 }}>
                With Gen AI suggestions, project-building guidance, and ATS-optimized templates, you’re not just creating a resume — you’re building your future.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button fullWidth className={classes.ctaPrimary}>Start Building — It’s Free</Button>
            </Grid>
          </Grid>
        </section>

        <footer className={classes.footer}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="subtitle2">© {new Date().getFullYear()} Gigaversity</Typography>
              <Typography variant="caption" className={classes.smallMuted}>Free Resume Builder • AI Assistance • ATS-Friendly</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" className={classes.smallMuted}>Built for Students, Freshers and Professionals</Typography>
            </Grid>
          </Grid>
        </footer>

      </Container>
    </div>
  );
}

// Helper: alias to keep makeStyles usage consistent
function useClasses() {
  return useStyles();
}
