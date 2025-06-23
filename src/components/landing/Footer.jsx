// src/components/Footer.jsx
import React from "react";
import footerBg from "@assets/image/landing-footer.png"; // ← 이 경로만 고치면 끝!

const Footer = () => {
  return (
    <footer style={styles.wrapper}>
      <div style={styles.overlay}>
        <p style={styles.text}>© 날마다 에피그램</p>
      </div>
    </footer>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    backgroundImage: `url(${footerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    minHeight: "50vh",
    boxSizing: "border-box",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: "14px",
    margin: 0,
  },
};

export default Footer;
