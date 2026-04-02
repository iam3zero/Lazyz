import { useEffect, useState, useRef } from "react";
import "../styles/hero.scss";

const images = [
  "./public/img/pc_1.jpg",
  "./public/img/pc_2.jpg",
  "./public/img/pc_3.jpg",
  "./public/img/pc_4.jpg",
  "./public/img/pc_5.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(null);
  const isDragging = useRef(false);
  const intervalRef = useRef(null);

  // 🔥 자동 슬라이드 시작 함수
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  // 🔥 자동 슬라이드 초기화
  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || startX.current === null) return;

    const diff = e.clientX - startX.current;

    if (diff > 30) {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      isDragging.current = false;
      resetAutoSlide(); // 🔥 여기 중요
    } else if (diff < -30) {
      setCurrent((prev) => (prev + 1) % images.length);
      isDragging.current = false;
      resetAutoSlide(); // 🔥 여기 중요
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startX.current = null;
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
}

export default Hero;