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
import ScrollToTop from "./components/scrollReset";

const HomePage = () => (
  <>
    <HeroSection />
    <div id="features">
      <ExclusiveFeatures />
      <KeyHighlights />
      <WhoIsItFor />
    </div>
    <div id="reviews">
      <ReviewsSection />
    </div>
    <ComparisonSection />
    <div id="faqs">
      <FAQSection />
    </div>
    <div id="aboutus">
      <AboutUsSection />
    </div>
    
    <CTASection />
  </>
);

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop/>
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
