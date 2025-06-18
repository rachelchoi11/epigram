import React from "react";
import intro1 from "../assets/image/landing-intro1.png";
import intro2 from "../assets/image/landing-intro2.png";
import intro3 from "../assets/image/landing-intro3.png";

const IntroSection = () => {
  return (
    <section style={styles.wrapper}>
      <div style={styles.box}>
        <img src={intro1} alt="intro 1" style={styles.image} />
      </div>
      <div style={styles.box}>
        <img src={intro2} alt="intro 2" style={styles.image} />
      </div>
      <div style={styles.box}>
        <img src={intro3} alt="intro 3" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#F5F7FA",
    padding: "100px 20px", // 위아래 여백 + 모바일 좌우 여백
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "80px", // 박스 사이 여백
    width: "100%",
    boxSizing: "border-box",
  },
  box: {
    width: "100%",
    maxWidth: "1188px", // 고정 너비 유지
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
  image: {
    width: "100%", // 박스 내에서 100% 유지
    height: "auto",
    objectFit: "contain",
  },
};

export default IntroSection;
