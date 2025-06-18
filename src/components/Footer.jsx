// src/components/Footer.jsx
import React from "react";
// footer 배경으로 사용할 이미지 import (경로와 파일명이 정확한지 확인!)
import footerBg from "../assets/image/landing-footer.png";

const Footer = () => {
  return (
    // wrapper: footer 전체를 감싸는 컨테이너
    <footer style={styles.wrapper}>
      {/* 
        overlay: 
        background 위에 컨텐츠(로고, 링크, 저작권 등)를 올리고 싶다면 
        이 div 안에 추가하세요.
      */}
    </footer>
  );
};

const styles = {
  wrapper: {
    width: "100%", // 화면 너비 가득 채우기
    // 배경 이미지 적용
    backgroundImage: `url(${footerBg})`,
    backgroundSize: "cover", // 이미지 잘림 없이 컨테이너를 꽉 채움
    backgroundPosition: "center", // 중앙 위치
    backgroundRepeat: "no-repeat", // 반복 금지
    position: "relative", // overlay 절대 위치의 기준
    // 이미지 원본 높이만큼 높이 설정 (필요에 따라 px 또는 vh 사용)
    // 예: height: "400px",
    // 또는 전체 화면 높이 비율로 설정할 때 minHeight 사용
    minHeight: "50vh",
    boxSizing: "border-box",
  },
  overlay: {
    // footer 위에 표시할 내용(로고, 링크 등)을 여기에 배치합니다.
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // 만약 텍스트가 잘 보이지 않는다면 배경색을 살짝 더 어둡게 깔아주세요.
    // backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  text: {
    color: "#fff", // 배경 위에 흰색 텍스트
    fontSize: "14px",
    margin: 0,
  },
};

export default Footer;
