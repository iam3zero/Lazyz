import { useEffect, useState } from "react";
import "../styles/scrollnav.scss";

function ScrollNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-nav">
      {[0, 1, 2, 3, 4].map((item, index) => (
        <div
          key={index}
          className={`dot ${active === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default ScrollNav;