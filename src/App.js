import { dividerClasses } from "@mui/material";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import ExclusiveFeatures from "./components/features";
import KeyHighlights from "./components/whychoose";
import WhoIsItFor from "./components/whoisit";
import ReviewsSection from "./components/review";
import ComparisonSection from "./components/compare";
import AboutUsSection from "./components/aboutus";
import FAQSection from "./components/faqs";
import CTASection from "./components/ctasection";
function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ExclusiveFeatures/>
      <KeyHighlights/>
      <WhoIsItFor/>
      <ReviewsSection/>
      <ComparisonSection/>
      <AboutUsSection/>
      <FAQSection/>
      <CTASection/>
    </div>
    
  );
}

export default App;
