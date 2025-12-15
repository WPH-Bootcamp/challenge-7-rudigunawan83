// import Hero from "./components/container/Hero";
// import TrustedBy from "./components/container/TrustedBy";
// import Stats from "./components/container/Stats";
// import Process from "./components/container/Process";
// import Services from "./components/container/Services";
// import Industries from "./components/container/Industries";
// import Projects from "./components/container/Projects";
// import Testimonials from "./components/container/Testimonials";
// import FAQ from "./components/container/FAQ";
// import Contact from "./components/container/Contact";

// function App() {
//   return (
//     <>
//       <Hero />
//       <TrustedBy />
//       <Stats />
//       <Process />
//       <Services />
//       <Industries />
//       <Projects />
//       <Testimonials />
//       <FAQ />
//       <Contact />
//     </>
//   );
// }

// export default App;
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
    </div>
  );
}

export default App;
