import React from "react";
import bgImage from "@assets/image/landing-bg.png";

const HeroSection = () => {
  return (
    <section style={styles.container}>
      <div style={styles.contentBox}>
        <h1 style={styles.title}>
          나만 갖고 있기엔
          <br />
          아까운 글이 있지 않나요?
        </h1>
        <p style={styles.subtitle}>다른 사람들과 감정을 공유해 보세요.</p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${bgImage})`, // 배경 이미지 적용
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // 화면 전체 높이
    display: "flex", // 가운데 정렬을 위한 flex
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px", // 반응형 여백
    textAlign: "center",
  },
  contentBox: {
    width: "500px", // 피그마 기준 너비
    height: "196px", // 전체 텍스트 영역 높이
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0px", // 제목과 부제목 사이 간격
    backgroundColor: "rgba(255, 255, 255, 0)", // 텍스트 박스 배경 투명도
    borderRadius: "8px", // 부드러운 모서리
    padding: "24px", // 내부 여백
  },
  title: {
    fontFamily: "'Iropke Batang', serif",
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: "64px",
    color: "#454545",
    margin: 0,
  },
  subtitle: {
    fontSize: "16px",
    color: "#333",
    margin: 0,
  },
};

export default HeroSection;
