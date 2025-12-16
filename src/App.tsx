import Navbar from "./components/container/Navbar";
import Hero from "./components/container/HeroSection";
import TrustedBy from "./components/container/TrustedBy";
import StatsSection from "./components/container/StatsSection";
import ProcessSection from "./components/container/ProcessSection";
import ServicesSection from "./components/container/ServicesSection";
import PortfolioSection from "./components/container/PortfolioSection";
import TestimonialSection from "./components/container/TestimonialSection";
import ContactSection from "./components/container/ContactSection";
import Footer from "./components/container/Footer";
import IndustrySection from "./components/container/IndustrySection";
import FaqSection from "./components/container/FaqSection";
import ScrollToTop from "./components/ui/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <TrustedBy />
      <StatsSection />
      <ProcessSection />
      <ServicesSection />
      <IndustrySection />
      <PortfolioSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
