import React from "react";
// 리뷰 영역에 들어갈 이미지 임포트
import reviewImage from "@assets/image/landing-review.png";

const ReviewSection = () => {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <img src={reviewImage} alt="사용자 리뷰 예시" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    background: "linear-gradient(180deg, #F5F7FA 0%, #EAEDF2 100%)",
    padding: "100px 20px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: "640px",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
};

export default ReviewSection;
