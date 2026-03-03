import Hero from "../components/Hero";
import "../styles/home.scss";

function Home() {
  return (
    <div className="sections">
      <section className="section">
        <Hero />
      </section>

      <section className="section section2"></section>
      <section className="section section3"></section>
      <section className="section section4"></section>
      <section className="section section5"></section>
    </div>
  );
}

export default Home;