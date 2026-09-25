import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Zone from "../../components/zone/Zone";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
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
