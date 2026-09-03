import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Zone from "../../components/zone/Zone";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Zone />
      </main>
      <Footer />
    </>
  );
}
