// src/pages/Landing.jsx

import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
// import LineSection from "@/components/landing/LineSection";
import ReviewSection from "@/components/landing/ReviewSection";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ReviewSection />
      <Footer />
    </>
  );
};

export default Landing;
