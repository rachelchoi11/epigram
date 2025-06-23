import React from "react";
import lineImage from "@assets/image/landing-line.png"; // 실제 경로 확인!

const LineSeparator = () => (
  <div style={styles.container}>
    <img src={lineImage} alt="구분선" style={styles.line} />
  </div>
);

const styles = {
  container: {
    width: "100%", // 부모 너비 100%
    overflow: "hidden", // 넘치는 부분 숨기기
  },
  line: {
    width: "2640px", // 피그마 지정 너비
    height: "15px", // 피그마 지정 높이
    display: "block",
    margin: "0 auto", // 가로 중앙 정렬
    transform: "translateX(-360px)", // 왼쪽 오프셋 적용
  },
};

export default LineSeparator;
