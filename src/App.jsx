import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import ScrollNav from "./components/ScrollNav";
import Home from "./pages/Home";
import './App.css'

function App() {
  const [section, setSection] = useState(0);
  const isScrolling = useRef(false);
  const totalSections = 5; // Hero + 4개 section
  const getTranslateY = (section) => {
  if (section === 3) {
    return 300 - 18; 
    // 0~3까지 100vh씩 = 300vh
    // 마지막에서 15vh 덜 올림 → 위 섹션 15vh 남김
  }

  return section * 100;
};

  useEffect(() => {
    const handleWheel = (e) => {
    if (section === 3) return; // 🔥 section4에서는 일반 스크롤 허용

    if (isScrolling.current) return;

    if (Math.abs(e.deltaY) < 30) return;

    isScrolling.current = true;

    if (e.deltaY > 0) {
      setSection((prev) => (prev < totalSections - 1 ? prev + 1 : prev));
    } else {
      setSection((prev) => (prev > 0 ? prev - 1 : prev));
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };


    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Header />
      <ScrollNav current={section} setSection={setSection} />

      <div
        className="page-wrapper"
        style={{
        transform: `translateY(-${getTranslateY(section)}vh)`
      }}
      >
        <Home />
      </div>
    </>
  );
}

export default App;