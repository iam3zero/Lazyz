import "../styles/scrollnav.scss";

function ScrollNav({ current, setSection }) {

  const handleClick = (index) => {
    setSection(index);
  };

  return (
    <div className="scroll-nav">
      {[0, 1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className={`dot ${current === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default ScrollNav;