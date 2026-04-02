import Hero from "../components/Hero";
import "../styles/home.scss";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="sections">
      <section className="section section1">
        <Hero />
      </section>

      <section className="section section2"></section>
      <section className="section section3"></section>
      <section className="section section4">
        <Section4 />
        <Footer />
      </section>
    </div>
  );
}

export default Home;