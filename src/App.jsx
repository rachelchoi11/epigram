import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed"; // Feed 페이지 import 추가

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 루트 경로에 Landing 컴포넌트 연결 */}
        <Route path="/" element={<Landing />} />

        {/* /feed 경로에 Feed 컴포넌트 연결 */}
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
