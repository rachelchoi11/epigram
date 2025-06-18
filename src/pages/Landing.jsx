// src/pages/Landing.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection"; // ✅ 새로 import 추가
import ReviewSection from "../components/ReviewSection"; // 추가
import Footer from "../components/Footer"; // 추가

const Landing = () => {
  return (
    <>
      <HeroSection />
      <IntroSection /> {/* ✅ HeroSection 바로 아래에 배치 */}
      <ReviewSection /> {/* 리뷰 섹션 추가 */}
      <Footer /> {/* 푸터 삽입 */}
    </>
  );
};

export default Landing;
