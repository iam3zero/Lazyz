import "../styles/section4.scss";

function Section4() {
  return (
    <div className="section4-inner">

      {/* 상단 타이틀 이미지 */}
      <div className="insta-title">
        <img src="./public/img/insta.jpg" alt="Instagram" />
      </div>

      {/* 인스타 위젯 그리드 */}
      <div className="insta-grid">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="insta-item">
            <img src={`./public/img/section4-${index + 1}.jpg`} alt={`section4-${index}`} />
            <span className="icon-top-right"></span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Section4;