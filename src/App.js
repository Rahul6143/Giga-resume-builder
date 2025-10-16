import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import ExclusiveFeatures from "./components/features";
import KeyHighlights from "./components/keyhighlights";
import WhoIsItFor from "./components/whoisit";
import ReviewsSection from "./components/review";
import ComparisonSection from "./components/compare";
import AboutUsSection from "./components/aboutus";
import FAQSection from "./components/faqs";
import CTASection from "./components/ctasection";
import Login from "./components/login";
import TemplateGallery from "./components/templateGallery";


// =========================
// Home Page
// =========================
const HomePage = () => (
  <>
    <HeroSection />
    <ExclusiveFeatures />
    <KeyHighlights />
    <WhoIsItFor />
    <ReviewsSection />
    <ComparisonSection />
    <AboutUsSection />
    <FAQSection />
    <CTASection />
  </>
);

// =========================
// Layout Wrapper (controls Navbar visibility)
// =========================
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login"; // 👈 hide Navbar on /login

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

// =========================
// Main App Component
// =========================
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/templates" element={<TemplateGallery />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
