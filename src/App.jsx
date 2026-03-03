import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import ScrollNav from "./components/ScrollNav";
import Home from "./pages/Home";

function App() {
  const [section, setSection] = useState(0);
  const isScrolling = useRef(false);
  const totalSections = 5; // Hero + 4개 section

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        setSection((prev) =>
          prev < totalSections - 1 ? prev + 1 : prev
        );
      } else {
        setSection((prev) =>
          prev > 0 ? prev - 1 : prev
        );
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
      <ScrollNav current={section} />

      <div
        className="page-wrapper"
        style={{
          transform: `translateY(-${section * 100}vh)`
        }}
      >
        <Home />
      </div>
    </>
  );
}

export default App;