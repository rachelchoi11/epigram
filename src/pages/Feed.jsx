import React from "react";
import Header from "../components/feed/Header";
import EpigramGrid from "../components/feed/EpigramGrid";
import LoadMoreButton from "../components/feed/LoadMoreButton";
import CreateButton from "../components/feed/CreateButton";

const Feed = () => {
  // 실제론 API 로딩 + 상태관리 필요
  const dummyData = [
    {
      id: 1,
      text: "오랫동안 꿈을 그리는 사람은…",
      author: "앙드레 말로",
      tags: ["#나아가야할때", "#꿈을이루고싶을때"],
    },
    // ... 총 6개
  ];

  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.main}>
        <EpigramGrid items={dummyData} />
        <LoadMoreButton />
      </main>
      <CreateButton />
    </div>
  );
};

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: "#F5F7FA",
  },
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 16px",
    boxSizing: "border-box",
  },
};

export default Feed;
