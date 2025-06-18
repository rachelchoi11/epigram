import React from "react";
// 리뷰 영역에 들어갈 이미지 임포트
import reviewImage from "../assets/image/landing-review.png";

const ReviewSection = () => {
  return (
    // section 전체에 그라데이션 배경 적용
    <section style={styles.wrapper}>
      {/* 이미지 컨테이너: 가운데 정렬 */}
      <div style={styles.container}>
        {/* 리뷰 이미지 */}
        <img src={reviewImage} alt="사용자 리뷰 예시" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    // Figma에서 지정한 0%→100% 세로 그라데이션
    background: "linear-gradient(180deg, #F5F7FA 0%, #EAEDF2 100%)",
    // 위아래 여백은 필요에 따라 조정하세요
    padding: "100px 20px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center", // 수평 가운데
  },
  container: {
    width: "100%",
    maxWidth: "640px", // Figma 지정 너비
    height: "auto", // 높이는 이미지 비율에 맡김
    display: "flex",
    justifyContent: "center", // 이미지도 컨테이너 내부에서 가운데
    boxSizing: "border-box",
    // 위아래 간격(gap)은 Landing.jsx에서 컴포넌트 간 gap으로 처리합니다
  },
  image: {
    width: "100%", // 컨테이너에 맞춰 늘어나거나 줄어듦
    height: "auto", // 원본 비율 유지 (1056px 높이 비율)
    objectFit: "contain", // 이미지 왜곡 없이
  },
};

export default ReviewSection;
